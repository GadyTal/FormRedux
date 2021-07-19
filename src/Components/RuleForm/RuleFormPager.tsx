import React from 'react';
import { createMachine } from 'xstate';
import { usePager } from '../../hooks/usePager/usePager';
import { CurrentOpen, OpenComponentFn } from '../../Types/types';
import { FormContainer } from '../FormContainer';
import RuleAdvanceSettingsFormPresentation from './pages/RuleAdvanceSettingsFormPresentation/RuleAdvanceSettingsFormPresentation';
import { ruleAdvanceSettingsFormPresentationValidationSchema } from './pages/RuleAdvanceSettingsFormPresentation/validationSchema';
import { RuleFormPresentation } from './pages/RuleFormPresentation/RuleFormPresentation';
import { ruleFormPresentationValidationSchema } from './pages/RuleFormPresentation/validationSchema';
import RuleFormContainer from './RuleFormContainer';

const ruleFormMachine = createMachine({
  id: 'ruleForm',
  initial: 'init',
  states: {
    init: {
      context: {
        Component: RuleFormPresentation,
        schemaValidation: ruleFormPresentationValidationSchema as any
      },
      on: {
        SUBMIT: 'onSubmit',
        ADVANCED_SETTINGS: 'advancedSettings'
      }
    },
    advancedSettings: {
      context: {
        Component: RuleAdvanceSettingsFormPresentation,
        schemaValidation: ruleAdvanceSettingsFormPresentationValidationSchema as any
      },
      on: {
        SUBMIT: 'init'
      }
    },
    onSubmit: {
      invoke: {
        src: 'apiCall',
        onDone: {
          target: "Submitted"
        }
      }
    },
    Submitted: {
      entry: 'closeModal',
      type: 'final'
    }
  }
});

export const RuleFormPager: React.FC<{ openFn: OpenComponentFn, close: () => void, setActivePageId: (activePageId: string) => void }> = ({ openFn, close, setActivePageId }) => {
  const { changePage, currentPage, activePageId } = usePager(ruleFormMachine, {
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
  }, setActivePageId);

  if (!(currentPage.context as any)?.schemaValidation) return <>{"Boozi"}</>

  return (
    <RuleFormContainer renderProp={(initState, onSubmit, editEntity, setActivePageId) => {
      return <FormContainer schema={(currentPage.context as any).schemaValidation} initialState={initState} onSubmit={(data) => {
        changePage("SUBMIT");
      }} formName={"Rule Form Container"} renderProps={(validation, formState, errors, setFormState) => {
        const CurrentComponent = (currentPage.context as any).Component;

        return (
          <CurrentComponent onUiStateChange={(state) => handleUiStateChange({ ...currentUIState, ...state })}
            changePage={changePage} openFn={(current: CurrentOpen) => {
              openFn(current);
              handleUiStateChange({ activePageId: currentPage.context.id })
              editEntity(formState)
            }} errors={errors} state={formState} setFormState={setFormState} />
        )
      }} />
    }} />
  );
};
