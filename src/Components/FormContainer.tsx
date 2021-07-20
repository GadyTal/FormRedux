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
      onSubmit(values);
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
  //     {renderProps(formik.trigger, formik.getValues(), errors, (e: any) => { formik.setValue(e.target.name, e.target.value)})}
  //     <DevTool control={formik.control} placement={"top-right"} />
  //     </>
  //   </form>
  // );
};
