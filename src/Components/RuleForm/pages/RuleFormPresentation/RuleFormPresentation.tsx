import React from 'react';
import { PagerPresenationComponentProps } from '../../../../Types/types';
import { CertificatePager } from '../../../CertificateForm/CertificateFormPager';

export const RuleFormPresentation: React.FC<PagerPresenationComponentProps> = ({ errors, state, setFormState, openFn, changePage }) => {
  return (
    <>
      <div>RuleFormPresentaions</div>
      <div>Cert: {(state.certificateModel || { certificateModel: {} }).name}</div>
      <input
        name={'name'}
        placeholder={"name"}
        value={state.name}
        onChange={setFormState}
      />
      <div>{errors.name}</div>
      <input
        name={'action'}
        placeholder={"action"}
        value={state.action}
        onChange={setFormState}
      />
      <div>{errors.action}</div>
      <input
        name={'sshProfile'}
        placeholder={"sshProfile"}
        value={state.sshProfile}
        onChange={setFormState}
      />
      <div>{errors.sshProfile}</div>
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
      <button onClick={() => changePage('ADVANCED_SETTINGS')}>
        Go to advance settings
      </button>
      <input type={'submit'} value={'Submit'} />
    </>
  );
};