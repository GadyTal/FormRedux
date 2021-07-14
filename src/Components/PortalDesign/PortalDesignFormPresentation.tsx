import React from 'react';
import { PagerPresenationComponentProps } from '../../Types/types';
import { CertificatePager } from '../CertificateForm/CertificateFormPager';

export const PortalDesignFormPresentation: React.FC<PagerPresenationComponentProps> = ({ errors, state, setFormState, openFn, changePage }) => {
  return (
    <>
      <div>PortalDesignFormPresentation</div>
      <input
        name={'name'}
        placeholder={"name"}
        value={state.name}
        onChange={e => setFormState({ name: e.target.value })}
      />
      <div>{errors.name}</div>
      <button
        onClick={() => {
          openFn({
            layout: 'rightPanel',
            component: CertificatePager
          });
        }}
      >
        Open certificate form
      </button>
      <button onClick={() => changePage('advanceSettings')}>
        Go to advance settings
      </button>
      <input type={'submit'} value={'Submit'} />
    </>
  );
};
