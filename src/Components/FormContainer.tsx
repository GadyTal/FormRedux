import React from 'react';
import { useFormStateManger } from '../Context/FormManagerStateCtx/FormManagerStateCtx';

export const FormContainer: React.FC<
  React.PropsWithChildren<{ schema: object }>
> = props => {
  const { children, schema, onSubmit, formName } = props;
  const { updateFormState, state } = useFormStateManger(formName);

  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        onSubmit(state, updateFormState);
      }}
    >
      {children({}, state, {}, updateFormState)}
    </form>
  );
};
