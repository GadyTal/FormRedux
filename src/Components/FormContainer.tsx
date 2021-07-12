import React from 'react';
import { useFormStateManger } from '../Context/FormManagerStateCtx/FormManagerStateCtx';

export const FormContainer: React.FC<{
  schema: object, onSubmit: (state: any, updateFormState: any) => void, formName: string,
  renderProps: (validation: any, formState: any, errors: any, setFormState: any) => JSX.Element
}> = props => {
  const { renderProps, schema, onSubmit, formName } = props;
  const { updateFormState, state } = useFormStateManger(formName);

  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        onSubmit(state, updateFormState);
      }}
    >
      {renderProps({}, state, {}, updateFormState)}
    </form>
  );
};
