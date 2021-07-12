import { RuleFormPresentation } from '../RuleFormPresentation';
import RuleAdvanceSettingsFormPresentation from '../RuleAdvanceSettingsFormPresentation';
import { usePager } from '../../hooks/usePager/usePager';
import React from 'react';

export const ruleFormSchema = {};

export const RuleFormStateMachine = {
  init: {
    currentPage: RuleFormPresentation
  },
  advanceSettings: {
    currentPage: RuleAdvanceSettingsFormPresentation
  }
};

export const RuleFormPager: React.FC<{ open: OpenComponentFn; dispatch }> = ({
  open,
  dispatch
}) => {
  const { changePage, currentPage: CurrentPage } = usePager(
    RuleFormStateMachine
  );
  console.log('CurrentPage', CurrentPage);

  return (
    <RuleFormContainer changePage={changePage} open={open} dispatch={dispatch}>
      <CurrentPage />
    </RuleFormContainer>
  );
};

// Ploni => FormStaeManager => RuleFormPager.register(RuleForupdater) => @open => CertForm
// Ploni => FormStaeManager => CertFormPager.register(CertFormupdater) => @open => IpAddressProfile
