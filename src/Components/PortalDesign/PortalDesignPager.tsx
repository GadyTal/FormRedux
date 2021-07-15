import React from 'react';
import { usePager } from '../../hooks/usePager/usePager';
import { CurrentOpen, OpenComponentFn } from '../../Types/types';
import { FormContainer } from '../FormContainer';
import PortalDesignFormAdvancedPresentation from './PortalDesignFormAdvancedPresentation';
import PortalDesignFormContainer from './PortalDesignFormContainer/PortalDesignFormContainer';
import { PortalDesignFormPresentation } from './PortalDesignFormPresentation';

export const PortalDesignSchema = {};

export const PortalDesignStateMachine = {
  init: {
    Component: PortalDesignFormPresentation,
    schema: {},
    isSubmitApi: true
  },
  advanceSettings: {
    Component: PortalDesignFormAdvancedPresentation,
    schema: {}
  }
};

export const PortalDesignFormPager: React.FC<{ openFn: OpenComponentFn, close: () => void }> = ({
  openFn,
  close
}) => {
  const { changePage, currentPage } = usePager(PortalDesignStateMachine);

  return (
    <PortalDesignFormContainer renderProp={(initState, onSubmit, editEntity) => {
      return <FormContainer schema={currentPage.schema} initialState={initState} onSubmit={async (data) => {
        if (currentPage.isSubmitApi) {
          // API page
          await onSubmit(data);
        } else {
          // No API page
          editEntity(data);
          changePage("init");
        }
      }} formName={"Portal Design Form Container"} renderProps={(validation, formState, errors, setFormState) => {
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
