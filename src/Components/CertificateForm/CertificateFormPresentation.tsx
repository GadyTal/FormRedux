import React from 'react';
import { PagerPresenationComponentProps } from '../../Types/types';

export const CertificateFormPresentation: React.FC<PagerPresenationComponentProps> = ({ changePage, openFn, errors, setFormState, state }) => {
  const name = 'Cert';

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

    <input type={'submit'} value={'Submit'} />
  </>)
};
