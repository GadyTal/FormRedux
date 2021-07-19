import React from 'react';
import { connect, useDispatch } from 'react-redux';
import { createMachine } from 'xstate';
import { usePager } from '../../hooks/usePager/usePager';
import { CurrentOpen, OpenComponentFn, PagerPresenationComponentProps } from '../../Types/types';
import { FormContainer } from '../FormContainer';
import RuleAdvanceSettingsFormPresentation from '../RuleAdvanceSettingsFormPresentation';
import { RuleFormPresentation } from '../RuleFormPresentation';
import RuleFormContainer from './RuleFormContainer';

export const ruleFormSchema = {};

type LightEvent = { type: 'SUBMIT', schema: object, Component: React.FC<PagerPresenationComponentProps> }

type Schema = { schema: Record<string,any>, Component: React.FC<PagerPresenationComponentProps> }

export const stateMachine = createMachine<Schema, LightEvent, { value: 'init', context: Schema} | { value: 'advanceSettings' , context: Schema}>({
  initial: 'init',
  states: {
    init: {
      on: {
        SUBMIT: 'advanceSettings'
      },
      context: {
        schema: {},
        Component: RuleFormPresentation
      }
    },
    advanceSettings: {
      on: {
        SUBMIT: 'init'
      },
      context: {
        schema: {},
        Component: RuleAdvanceSettingsFormPresentation
      }
    }
  }
})


export const RuleFormPager: React.FC<{renderProp: (Comp: React.FC<{openFn: OpenComponentFn, close: () => void, entityId?:string}>) => JSX.Element}> = (props) => {
  const { renderProp } = props;
  const { changePage, currentPage } = usePager(
    stateMachine
  );

  console.log(currentPage)

  return renderProp(React.forwardRef<{}, {openFn: OpenComponentFn, close: () => void, entityId?:string}>((props) => {
    return (
      <RuleFormContainer entityId={props.entityId} renderProp={(initState,onSubmit, editEntity) => {
        return <FormContainer schema={currentPage.schema} initialState={initState} onSubmit={(data) => {
          onSubmit(data).then(res => {
            close();
          })
        }} formName={"Rule Form Container"} renderProps={(validation, formState, errors, setFormState) => {
          console.log(currentPage.Component);
          return (
            <currentPage.Component changePage={changePage} openFn={(current: CurrentOpen) => {
              props.openFn(current);
              editEntity(formState)
            }} errors={errors} state={formState} setFormState={setFormState} />
          )
        }} />
      }} />
    );
  }))
};
