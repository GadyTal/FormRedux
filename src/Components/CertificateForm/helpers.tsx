import { usePager } from "../../hooks/usePager/usePager";
import { OpenComponentFn } from "../../Types/types";
import { CertificateFormPresentation } from "./CertificateFormPresentation";

export const ruleFormSchema = {};

export const CertificateFormStateMachine = {
  init: {
    currentPage: CertificateFormPresentation
  }
};

export const CertificatePager = (openFn: OpenComponentFn) => {
  const { changePage, currentPage } = usePager(CertificateFormStateMachine);

  return currentPage(changePage, open);
};
