import { useFormik } from 'formik';
import React from 'react';
// import { useForm } from "react-hook-form"
// import { yupResolver } from "@hookform/resolvers/yup";

export const FormContainer: React.FC<{
  schema: any, 
  formName: string,
  initialState: Record<string, any>
  onSubmit: (state: any) => void, 
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

  // const formik = useForm({
  //   defaultValues: initialState,
  //   resolver: yupResolver(schema),
  // });

  // const { errors  } = formik.formState;

  // return (
  //   <form onSubmit={formik.handleSubmit(onSubmit)} >
  //     <>
  //     {renderProps(formik.trigger, formik.getValues(), errors, (e: any) => { debugger; formik.setValue(e.target.name, e.target.value)})}
  //     {/* <DevTool control={formik.control} placement={"top-right"} /> */}
  //     </>
  //   </form>
  // );
};
