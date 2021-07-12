import React from 'react';
import { usePager } from '../../hooks/usePager/usePager';
import { OpenComponentFn } from '../../Types/types';
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

export const RuleFormPager: React.FC<{openFn: OpenComponentFn}> = ({
  openFn
}) => {
  const { changePage, currentPage } = usePager(
    RuleFormStateMachine
  );

  return (
    <RuleFormContainer renderProp={(onSubmit) => {
      return <FormContainer schema={currentPage.schema} onSubmit={(data) => {
        onSubmit(data);
        // openFn()
      }} formName={"Rule Form Container"} renderProps={(validation, formState, errors, setFormState) => {
        return (
          <currentPage.Component changePage={changePage} openFn={openFn} errors={errors} state={formState} setFormState={setFormState} />
        )
      }} />
    }} />
  );
};
