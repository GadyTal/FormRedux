import React from 'react';
import { usePager } from '../../hooks/usePager/usePager';
import { CurrentOpen, OpenComponentFn } from '../../Types/types';
import { FormContainer } from '../FormContainer';
import RuleAdvanceSettingsFormPresentation from '../RuleAdvanceSettingsFormPresentation';
import { RuleFormPresentation } from '../RuleFormPresentation';
import RuleFormContainer from './RuleFormContainer';

export const ruleFormSchema = {};

export const RuleFormStateMachine = {
  init: {
    Component: RuleFormPresentation,
    schema: {}
  },
  advanceSettings: {
    Component: RuleAdvanceSettingsFormPresentation,
    schema: {}
  }
};

export const RuleFormPager: React.FC<{openFn: OpenComponentFn, close: () => void}> = ({
  openFn,
  close
}) => {
  const { changePage, currentPage } = usePager(
    RuleFormStateMachine
  );

  return (
    <RuleFormContainer  renderProp={(initState,onSubmit, editEntity) => {
      return <FormContainer schema={currentPage.schema} initialState={initState} onSubmit={(data) => {
        onSubmit(data).then(res => {
          close();
        })
      }} formName={"Rule Form Container"} renderProps={(validation, formState, errors, setFormState) => {
        return (
          <currentPage.Component changePage={changePage} openFn={(current: CurrentOpen) => {
            openFn(current);
            editEntity(formState)
          }} errors={errors} state={formState} setFormState={setFormState} />
        )
      }} />
    }} />
  );
};
