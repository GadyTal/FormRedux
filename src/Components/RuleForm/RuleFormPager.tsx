import React from 'react';
import UiStateContextProvider from '../../Context/UiStateCtx/UiStateCtx';
import { CurrentOpen, EntityType, OpenComponentFn } from '../../Types/types';
import { PagerComponent } from '../Common/PagerComponent';
import { FormContainer } from '../FormContainer';
import RuleFormContainer from './RuleFormContainer';
import { ruleFormMachine } from './RuleStateMachine';

export const RuleFormPager: React.FC<{ openFn: OpenComponentFn, close: () => void }> = ({ openFn, close }) => {
  const entityStateMachineOptions = {
    actions: {
      closeModal: () => {
        close();
      }
    },
    services: {
      apiCall: () => {
        return Promise.resolve("success");
      }
    }
  };

  return (
    <PagerComponent type={EntityType.Rule} entityStateMachine={ruleFormMachine} entityStateMachineOptions={entityStateMachineOptions} 
      renderProps={(changePage, currentPage, activePageId) => {
        return (<RuleFormContainer renderProp={(initState, onSubmit, editEntity) => {
          return <FormContainer 
          schema={(currentPage.context as any).schemaValidation} 
          initialState={initState} 
          formName={"Rule Form Container"} 
          onSubmit={(data) => {
            changePage("SUBMIT");
          }} 
          renderProps={(validation, formState, errors, setFormState) => {
            return <UiStateContextProvider id={activePageId} renderProp={(setUiState) => {
                      const CurrentComponent = (currentPage.context as any).Component;
                      return <CurrentComponent
                              errors={errors}
                              state={formState}
                              setFormState={setFormState}
                              changePage={(dest: string) => {
                                changePage(dest);
                                setUiState()
                              }}
                              openFn={(current: CurrentOpen) => {
                                openFn(current);
                                editEntity(formState);
                                setUiState()
                              }} 
                            />
                    }} />
          }} />
        }} />
      )
    }} />
  );
};

export default RuleFormPager;