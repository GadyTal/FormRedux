import React from "react";
import { PagerPresenationComponentProps } from "../../../../Types/types";
import { CertificatePager } from "../../../CertificateForm/CertificateFormPager";

const RuleAdvanceSettingsFormPresentation: React.FC<PagerPresenationComponentProps> = props => {
  const { changePage, openFn, onSubmit, setFormState, state, errors } = props;
  return (
    <>
      <input
        name={'something'}
        value={state.something}
        onChange={setFormState}
      />
      <div>{errors.something}</div>

      <input
        name={'other'}
        value={state.other}
        onChange={setFormState}
      />
      <div>{errors.other}</div>

      <button
        onClick={() => {
          openFn({
            layout: 'rightPanel',
            component: CertificatePager
          });
        }}
      >
        Open certificate form
      </button>

      <button onClick={() => changePage('init')}>Back</button>

      <input type={'submit'} value={'Submit'} />
    </>
  );
};

export default RuleAdvanceSettingsFormPresentation;
