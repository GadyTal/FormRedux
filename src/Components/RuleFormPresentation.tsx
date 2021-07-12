import React from 'react';
import { PagerPresenationComponentProps } from '../Types/types';

export const RuleFormPresentation: React.FC<PagerPresenationComponentProps> = ({ errors, state, setFormState, openFn, changePage }) => {
  return (
    <>
      <div>RuleFormPresentaions</div>
      <div>Cert: {(state.cert || { cert: {} }).certId}</div>
      <input
        name={'name'}
        value={state.name}
        onChange={e => setFormState({ name: e.target.value })}
      />
      <div>{errors.name}</div>
      <input
        name={'action'}
        value={state.action}
        onChange={e => setFormState({ action: e.target.value })}
      />
      <div>{errors.action}</div>
      <input
        name={'sshProfile'}
        value={state.sshProfile}
        onChange={e => setFormState({ sshProfile: e.target.value })}
      />
      <div>{errors.sshProfile}</div>
      <button
        onClick={() => {
          openFn({
            layout: 'modal',
            component: CertificateFormPager(id, dispatch)
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
