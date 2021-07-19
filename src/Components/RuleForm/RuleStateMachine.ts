import { createMachine } from 'xstate';
import RuleAdvanceSettingsFormPresentation from './pages/RuleAdvanceSettingsFormPresentation/RuleAdvanceSettingsFormPresentation';
import { ruleAdvanceSettingsFormPresentationValidationSchema } from './pages/RuleAdvanceSettingsFormPresentation/validationSchema';
import { RuleFormPresentation } from './pages/RuleFormPresentation/RuleFormPresentation';
import { ruleFormPresentationValidationSchema } from './pages/RuleFormPresentation/validationSchema';

export const ruleFormMachine = createMachine({
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