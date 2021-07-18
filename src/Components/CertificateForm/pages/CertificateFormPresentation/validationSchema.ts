import * as Yup from 'yup';

export const certificateFormPresentationValidationSchema = Yup.object({
  name: Yup.string()
    .max(10, 'Must be 15 characters or less')
    .required('Required'),
  description: Yup.string()
    .max(5, 'Must be 20 characters or less')
    .required('Required'),
  certificate: Yup.string().required('certificate is Required')
});