import * as Yup from 'yup';

export const ruleAdvanceSettingsFormPresentationValidationSchema = Yup.object({
  something: Yup.string()
    .max(10, 'something - Must be 10 characters or less')
    .required('Required'),
  other: Yup.string()
    .max(5, 'other Must be 5 characters or less, can be null')
});