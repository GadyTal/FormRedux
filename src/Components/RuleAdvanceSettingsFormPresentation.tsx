import React from "react";
import { PagerPresenationComponentProps } from "../Types/types";
import { FormContainer } from "./FormContainer";
import { RuleFormPager } from "./RuleForm/RuleFormPager";

const RuleAdvanceSettingsFormPresentation: React.FC<PagerPresenationComponentProps> = props => {
  const { changePage, openFn, errors, setFormState, state } = props;

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
          onClick={() => console.log("IpAddressForm")}
          value={'Open IP address form'}
        />
        <button
          onClick={() => changePage('init')}
          value={'Go back to rule form'}
        />

        <input type={'submit'} value={'Submit'} />
      </>
  );
};

export default RuleAdvanceSettingsFormPresentation;
