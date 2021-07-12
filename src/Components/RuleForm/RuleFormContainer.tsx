// RuleTable => RuleFormContainer @dispatch
export const RuleFormContainer: React.FC<{}> = (props: any) => {
  const { dispatch, changePage, openFn } = props;
  // const FormStateManager = useContext(FormStateManager);

  const onSubmit = data => {
    // dispatch('optimitiic', data); // table
    // api(data).then(res => {
    //   dispatch<RuleModel>('formStateManager.save', {
    //     ...payload,
    //     type: 'Cert'
    //   }); // formStateManager
    //   dispatch<RuleModel>('table.save', { ...payload }); // table
    // });
  };

  return (changPage, open) => children(changePage, open, onSubmit);
};
