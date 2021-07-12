import React from 'react';
import { PagerPresenationComponentProps } from '../../Types/types';
import { FormContainer } from '../FormContainer';
import { RuleFormPager } from '../RuleForm/helpers';

export const CertificateFormPresentation: React.FC<PagerPresenationComponentProps> = ({ changePage, openFn, onSubmit }) => {
  const name = 'Cert';

  const onSubmitHandler = (state: any, updateFormState: any) => {
    console.log(state);

    // Promise.resolve({ certId: '123' }).then((res: any) => {
    updateFormState({ cert: { certId: '123' } });
    openFn({ layout: 'modal', component: RuleFormPager });
    // });
  };

  const onStateChange = (state: any) => {
    console.log('eState', state);

    let data = {};

    return state[name] || {};
  };

  return (
    <FormContainer schema={{}} onSubmit={onSubmitHandler} formName={name} renderProps={(validation: any, formState: any, errors: any, setFormState: any) => {
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
            onClick={() => alert("Ip Address")
              // open({ layout: 'modal', component: IpAddressForm })
            }
          >
            Open IP address form
          </button>
          {/* <button onClick={changePage('init')} value={'Go back to rule form'} /> */}

          <input type={'submit'} value={'Submit'} />
        </>
      );
    }} />
  );
};
