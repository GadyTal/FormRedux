import { useFormik } from 'formik';
import React from 'react';

export const FormContainer: React.FC<{
  schema: object, onSubmit: (state: any) => void, formName: string,
  initialState: Record<string, any>
  renderProps: (validation: any, formState: any, errors: any, setFormState: any) => JSX.Element
}> = props => {
  const { renderProps, schema, onSubmit, formName, initialState } = props;
  
  const formik = useFormik({
    initialValues: initialState,
    validationSchema: schema,
    onSubmit: values => {
      onSubmit(formik.values);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} >
      {renderProps(formik.validateField, formik.values, formik.errors, formik.handleChange)}
    </form>
  );
};
