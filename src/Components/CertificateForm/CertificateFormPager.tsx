import React from "react";
import { createMachine } from 'xstate';
import { usePager } from "../../hooks/usePager/usePager";
import { OpenComponentFn } from "../../Types/types";
import { FormContainer } from "../FormContainer";
import CertificateFormContainer from "./CertificateFormContainer";
import { CertificateFormPresentation } from "./pages/CertificateFormPresentation/CertificateFormPresentation";
import { certificateFormPresentationValidationSchema } from "./pages/CertificateFormPresentation/validationSchema";


const CertificateFormStateMachine = createMachine({
  id: 'ruleForm',
  initial: 'init',
  states: {
    init: {
      context: {
        Component: CertificateFormPresentation,
        schemaValidation: certificateFormPresentationValidationSchema as any

      },
      on: {
        SUBMIT: 'onSubmit'
      }
    },
    onSubmit: {
      invoke: {
        src: 'apiCall',
        onDone: {
          target: 'success'
        }
      }
    },
    success: {
      entry: "closeModal"
    }
  }
});

export const CertificatePager: React.FC<{ openFn: OpenComponentFn, close: () => void }> = ({
  openFn, close
}) => {
  const { changePage, currentPage } = usePager(CertificateFormStateMachine, {
    actions: {
      closeModal: () => {
        console.log("Modal closed");
      }
    },
    services: {
      apiCall: () => {
        return Promise.resolve("success");
      }
    }
  });

  return (
    <CertificateFormContainer renderProp={(initState, onSubmit) => {
      return <FormContainer schema={(currentPage.context as any).schemaValidation} initialState={initState} onSubmit={(data) => {
        onSubmit(data);
        close();
      }} formName={"Cert container"} renderProps={(validation, formState, errors, setFormState) => {
        const CurrentComponent = (currentPage.context as any).Component;;
        return (
          <CurrentComponent changePage={changePage} openFn={openFn} errors={errors} state={formState} setFormState={setFormState} />
        )
      }} />
    }} />
  );
};

