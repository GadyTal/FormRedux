import { usePager } from "../../hooks/usePager/usePager";
import { CertificateFormPresentation } from "./CertificateFormPresentation";

export const ruleFormSchema = {};

export const CertificateFormStateMachine = {
  init: {
    currentPage: CertificateFormPresentation
  }
};

export const CertificatePager: React.FC<PagerPresenationComponentProps> = ({
  openFn,
  onSubmit,
}) => {
  const { changePage, currentPage } = usePager(
    CertificateFormStateMachine
  );

  return (
    <RuleFormContainer renderProp={(onSubmit) => {
      return <FormContainer schema={currentpage.schema} onSubmit={onSubmit} formName={"Rule Form Container"} renderProps={(validation, formState, errors, setFormState) => {
        return (
          <currentPage.Component changePage={changePage} openFn={openFn} errors={errors} state={formState} setFormState={setFormState} />
        )
      }} />
    }} />
  );
};

