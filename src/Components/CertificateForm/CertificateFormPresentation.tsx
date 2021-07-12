import React from 'react';
import { PagerPresenationComponentProps } from '../../Types/types';
import { RuleFormPager } from '../RuleForm/helpers';

export const CertificateFormPresentation: React.FC<PagerPresenationComponentProps> = ({ changePage, openFn, onSubmit, errors, setFormState, state }) => {
  const name = 'Cert';

  const onSubmitHandler = () => {
    console.log(state);

    // Promise.resolve({ certId: '123' }).then((res: any) => {
    // updateFormState({ cert: { certId: '123' } });
    openFn({ layout: 'modal', component: RuleFormPager });
    // });
  };

  const onStateChange = (state: any) => {
    console.log('eState', state);

    let data = {};

    return state[name] || {};
  };

  return (<>
    <div>cert form</div>
    <input
      name={'name'}
      value={state.name}
      onChange={e => setFormState({ name: e.target.value })}
    />
    <div>{errors.name}</div>

    <input
      name={'description'}
      value={state.description}
      onChange={e => setFormState({ description: e.target.value })}
    />
    <div>{errors.description}</div>

    <input
      name={'certificate'}
      value={state.certificate}
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

    <input type={'submit'} value={'Submit'} onClick={() => onSubmitHandler()}/>
  </>)
};
