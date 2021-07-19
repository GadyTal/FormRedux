import React from "react";
import { createMachine } from "xstate";
import { usePager } from "../../hooks/usePager/usePager";
import { OpenComponentFn, PagerPresenationComponentProps } from "../../Types/types";
import { FormContainer } from "../FormContainer";
import CertificateFormContainer from "./CertificateFormContainer";
import { CertificateFormPresentation } from "./CertificateFormPresentation";

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
        Component: CertificateFormPresentation
      }
    },
  }
})

export const CertificatePager: React.FC<{openFn: OpenComponentFn, close: () => void}> = ({
  openFn, close
}) => {
  const { changePage, currentPage } = usePager(
    stateMachine
  );

  return (
    <CertificateFormContainer renderProp={(initState, onSubmit) => {
      return <FormContainer schema={currentPage.schema} initialState={initState} onSubmit={(data) => {
        onSubmit(data);
        close();
      }} formName={"Cert container"} renderProps={(validation, formState, errors, setFormState) => {
        return (
          <currentPage.Component changePage={changePage} openFn={openFn} errors={errors} state={formState} setFormState={setFormState} />
        )
      }} />
    }} />
  );
};

