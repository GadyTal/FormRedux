import React from 'react';
import { FormContainer } from './FormContainer';
import { ruleFormSchema } from './RuleForm/helpers';
import { CertificateFormPresentation } from './CertificateFormPresentation';

export const RuleFormPresentation: React.FC<{
  changePage: (id: string) => void;
  open: OpenComponentFn;
  ruleDispatcher;
}> = ({ open, changePage, onSubmit }) => {
  const name = 'RuleForm';

  return (
    <FormContainer schema={ruleFormSchema} onSubmit={onSubmit} formName={name}>
      {(validation, formState, errors, setFormState) => {
        const st = onStateChange(formState);

        console.log('st', st);

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
        );
      }}
    </FormContainer>
  );
};
