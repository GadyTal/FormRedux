import React from "react";
import { PagerPresenationComponentProps } from "../../Types/types";
import { FormContainer } from "../FormContainer";
import { PortalDesignFormPager } from "./PortalDesignPager";

const PortalDesignFormAdvancedPresentation: React.FC<PagerPresenationComponentProps> = props => {
  const { changePage, openFn, onSubmit } = props;
  const name = 'RAdvc';

  const onSubmitHandler = (state: any, updateFormState: any) => {
    console.log(state);
    // Promise.resolve({ certId: '123' }).then(res => {
      // updateFormState({ cert: { certId: '123' } });
      openFn({ layout: 'modal', component: PortalDesignFormPager });
    // });
  };

  return (
    <FormContainer schema={{}} initialState={{}} onSubmit={onSubmitHandler} formName={name} renderProps={(validation, formState, errors, setFormState) => (
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
        >Open IP address form</button>
        <button
          onClick={() => changePage('init')}
        >Go back to PortalDesign main page</button>

        <input type={'submit'} value={'Submit'} />
      </>
    )}/> 
  );
};

export default PortalDesignFormAdvancedPresentation;
