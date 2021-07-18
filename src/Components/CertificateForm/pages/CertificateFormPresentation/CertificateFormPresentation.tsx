import React from 'react';
import { PagerPresenationComponentProps } from '../../../../Types/types';

export const CertificateFormPresentation: React.FC<PagerPresenationComponentProps> = ({ changePage, openFn, onSubmit, errors, setFormState, state }) => {
  return (<>
    <div>cert form</div>
    <input
      name={'name'}
      value={state.name}
      onChange={setFormState}
    />
    <div>{errors.name}</div>

    <input
      name={'description'}
      value={state.description}
      onChange={setFormState}
    />
    <div>{errors.description}</div>

    <input
      name={'certificate'}
      value={state.certificate}
      onChange={setFormState}
    />
    <div>{errors.certificate}</div>

    <input type={'submit'} value={'Submit'} />
  </>)
};
