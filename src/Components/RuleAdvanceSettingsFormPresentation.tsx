import React from "react";
import { PagerPresenationComponentProps } from "../Types/types";

const RuleAdvanceSettingsFormPresentation: React.FC<PagerPresenationComponentProps> = props => {
  const { changePage, openFn, onSubmit, setFormState, state, errors } = props;
  return (
    <>
      <input
        name={'something'}
        value={state.something}
        onChange={(e) => {
          setFormState({ something: e.target.value });
        }}
      />
      <div>{errors.something}</div>

      <input
        name={'other'}
        value={state.other}
        onChange={(e) => {
          setFormState({ other: e.target.value });
        }}
      />
      <div>{errors.other}</div>

      <button
        // onClick={() => open('modal', IpAddressForm)}
        onClick={() => alert("IpAddressForm")}
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
