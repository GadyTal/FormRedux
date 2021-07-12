// RuleTable => RuleFormContainer @dispatch
export const RuleFormContainer: React.Fc<{}> = dispatch => {
  const FormStateManager = useContext(FormStateManager);

  const onSubmit = data => {
    dispatch('optimitiic', data); // table
    api(data).then(res => {
      dispatch<RuleModel>('formStateManager.save', {
        ...payload,
        type: 'Cert'
      }); // formStateManager
      dispatch<RuleModel>('table.save', { ...payload }); // table
    });
  };

  return (changPage, open) => children(changePage, open, onSubmit);
};
