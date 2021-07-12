import React from 'react';
import { FormContainer } from './FormContainer';
import { RuleFormPager } from './RuleForm/helpers';

export const CertificateFormPresentation: React.FC<{
  changePage: (id: string) => void;
  open: OpenComponentFn;
}> = openFn => {
  const name = 'Cert';

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
      {(validation, formState, errors, setFormState) => {
        return (
          <>
            <div>cert form</div>
            <input
              name={'name'}
              value={formState.name}
              onChange={e => setFormState({ name: e.target.value })}
            />
            <div>{errors.name}</div>

            <input
              name={'description'}
              value={formState.description}
              onChange={e => setFormState({ description: e.target.value })}
            />
            <div>{errors.description}</div>

            <input
              name={'certificate'}
              value={formState.certificate}
              onChange={e => setFormState({ certificate: e.target.value })}
            />
            <div>{errors.certificate}</div>

            <button
              onClick={() =>
                open({ layout: 'modal', component: IpAddressForm })
              }
            >
              Open IP address form
            </button>
            {/* <button onClick={changePage('init')} value={'Go back to rule form'} /> */}

            <input type={'submit'} value={'Submit'} />
          </>
        );
      }}
    </FormContainer>
  );
};
