import React from 'react';
import { PagerPresenationComponentProps } from '../Types/types';
import { FormContainer } from './FormContainer';
import { ruleFormSchema } from './RuleForm/helpers';

export const RuleFormPresentation: React.FC<PagerPresenationComponentProps> = ({ openFn, changePage, onSubmit }) => {
  const name = 'RuleForm';

  const st: any = {};

  return (
    <FormContainer schema={ruleFormSchema} onSubmit={onSubmit} formName={name} renderProps={(validation, formState, errors, setFormState) => {
      return (
        <>
          <div>RuleFormPresentaions</div>
          <div>Cert: {(st.cert || { cert: {} }).certId}</div>
          <input
            name={'name'}
            value={st.name}
            onChange={e => setFormState({ name: e.target.value })}
          />
          <div>{errors.name}</div>
          <input
            name={'action'}
            value={st.action}
            onChange={e => setFormState({ action: e.target.value })}
          />
          <div>{errors.action}</div>
          <input
            name={'sshProfile'}
            value={st.sshProfile}
            onChange={e => setFormState({ sshProfile: e.target.value })}
          />
          <div>{errors.sshProfile}</div>
          <button
            onClick={() => {
              open({
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
      )
    }} />
  );
};
