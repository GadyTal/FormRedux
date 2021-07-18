import * as Yup from 'yup';

export const ruleFormPresentationValidationSchema = Yup.object({
  name: Yup.string()
    .max(10, 'Must be 15 characters or less')
    .required('Required'),
  action: Yup.string()
    .max(5, 'Must be 20 characters or less')
    .required('Required'),
  sshProfile: Yup.string().required('sshProfile is Required')
});