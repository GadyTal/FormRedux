import React from "react";
import { PagerPresenationComponentProps } from "../../Types/types";

const PortalDesignFormAdvancedPresentation: React.FC<PagerPresenationComponentProps> = props => {
  const { changePage, openFn, onSubmit, state, setFormState, errors } = props;

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
        onClick={() => alert("IpAddressForm")}
        value={'Open IP address form'}
      />
    
      <button
        onClick={() => {
          changePage('init');
        }}
      >Go back to PortalDesign main page</button>

      <input type={'submit'} value={'Submit'} />
    </>
  );
};

export default PortalDesignFormAdvancedPresentation;
