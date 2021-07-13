import React from "react";
import { usePager } from "../../hooks/usePager/usePager";
import { OpenComponentFn } from "../../Types/types";
import { FormContainer } from "../FormContainer";
import CertificateFormContainer from "./CertificateFormContainer";
import { CertificateFormPresentation } from "./CertificateFormPresentation";

export const ruleFormSchema = {};

export const CertificateFormStateMachine = {
  init: {
    Component: CertificateFormPresentation,
    schema: {}
  }
};

export const CertificatePager: React.FC<{openFn: OpenComponentFn, close: () => void}> = ({
  openFn, close
}) => {
  const { changePage, currentPage } = usePager(
    CertificateFormStateMachine
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

