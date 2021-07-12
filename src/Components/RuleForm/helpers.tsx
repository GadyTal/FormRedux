import React from 'react';
import { usePager } from '../../hooks/usePager/usePager';
import { PagerPresenationComponentProps } from '../../Types/types';
import RuleAdvanceSettingsFormPresentation from '../RuleAdvanceSettingsFormPresentation';
import { RuleFormPresentation } from '../RuleFormPresentation';
import { RuleFormContainer } from './RuleFormContainer';

export const ruleFormSchema = {};

export const RuleFormStateMachine = {
  init: {
    currentPage: RuleFormPresentation
  },
  advanceSettings: {
    currentPage: RuleAdvanceSettingsFormPresentation
  }
};

export const RuleFormPager: React.FC<PagerPresenationComponentProps> = ({
  openFn,
  onSubmit,
  // changePage
}) => {
  const { changePage, currentPage: CurrentPage } = usePager(
    RuleFormStateMachine
  );
  console.log('CurrentPage', CurrentPage);

  return (
    <RuleFormContainer changePage={changePage} open={open}>
      <CurrentPage />
    </RuleFormContainer>
  );
};

// Ploni => FormStaeManager => RuleFormPager.register(RuleForupdater) => @open => CertForm
// Ploni => FormStaeManager => CertFormPager.register(CertFormupdater) => @open => IpAddressProfile
