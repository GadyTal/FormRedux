import React from "react";
import { PagerPresenationComponentProps } from "../Types/types";
import { FormContainer } from "./FormContainer";
import { RuleFormPager } from "./RuleForm/helpers";

const RuleAdvanceSettingsFormPresentation: React.FC<PagerPresenationComponentProps> = props => {
  const { changePage, openFn, onSubmit } = props;
  const name = 'RAdvc';

  const onSubmitHandler = (state: any, updateFormState: any) => {
    console.log(state);
    // Promise.resolve({ certId: '123' }).then(res => {
      updateFormState({ cert: { certId: '123' } });
      openFn({ layout: 'modal', component: RuleFormPager });
    // });
  };

  const onStateChange = (state: any) => {
    console.log('eState', state);

    let data = {};

    return state[name] || {};
  };

  return (
    <FormContainer schema={{}} onSubmit={onSubmit} formName={name} renderProps={(validation, formState, errors, setFormState) => (
      <>
        <input
          name={'something'}
          value={formState.something}
          onChange={setFormState}
        />
        <div>{errors.something}</div>

        <input
          name={'other'}
          value={formState.other}
          onChange={setFormState}
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
    )}/> 
  );
};

export default RuleAdvanceSettingsFormPresentation;
