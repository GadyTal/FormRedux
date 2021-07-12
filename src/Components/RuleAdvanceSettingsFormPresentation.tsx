const RuleAdvanceSettingsFormPresentation: React.FC<{
  changePage: (id: string) => void;
  open: OpenComponentFn;
}> = props => {
  const { changePage, open } = props;
  const name = 'RAdvc';

  const onSubmit = (state, updateFormState) => {
    console.log(state);
    Promise.resolve({ certId: '123' }).then(res => {
      updateFormState({ cert: res });
      openFn({ layout: 'modal', component: RuleFormPager });
    });
  };

  const onStateChange = state => {
    console.log('eState', state);

    let data = {};

    return state[name] || {};
  };

  return (
    <FormContainer schema={{}} onSubmit={onSubmit} formName={name}>
      {(validation, formState, errors, setFormState) => (
        <>
          <input
            name={'something'}
            value={formState.something}
            onChange={setFormState}
          />
          <div>{errors.something}</div>

          <input
            name={'other'}
            value={formState.other}
            onChange={setFormState}
          />
          <div>{errors.other}</div>

          <button
            onClick={() => open('modal', IpAddressForm)}
            value={'Open IP address form'}
          />
          <button
            onClick={() => changePage('init')}
            value={'Go back to rule form'}
          />

          <input type={'submit'} value={'Submit'} />
        </>
      )}
    </FormContainer>
  );
};

export default RuleAdvanceSettingsFormPresentation;
