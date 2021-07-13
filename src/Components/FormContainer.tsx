import React from 'react';

export const FormContainer: React.FC<{
  schema: object, onSubmit: (state: any, updateFormState: any) => void, formName: string,
  initialState: Record<string, any>
  renderProps: (validation: any, formState: any, errors: any, setFormState: any) => JSX.Element
}> = props => {
  const { renderProps, schema, onSubmit, formName } = props;
  const [localState, setLocalState] = React.useState(props.initialState);

  const updateFormState = (data: Record<string, any>) => {
    setLocalState((prevState) => ({...prevState, ...data}))
  }

  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        onSubmit(localState, updateFormState);
      }}
    >
      {renderProps({}, localState, {}, updateFormState)}
    </form>
  );
};
