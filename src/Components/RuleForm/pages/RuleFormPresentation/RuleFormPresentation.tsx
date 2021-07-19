import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import { PagerPresenationComponentProps } from '../../../../Types/types';
import { CertificatePager } from '../../../CertificateForm/CertificateFormPager';
import UiStateConnector from '../../../Common/UiStateConnector';

export const RuleFormPresentation: React.FC<PagerPresenationComponentProps> = ({ errors, state, setFormState, openFn, changePage, onUiStateChange }) => {
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

      <UiStateConnector elementId={"destination-accordion"} rednerProps={(onUIStateChange, uiState) => {
        return <Accordion onChange={(e) => onUIStateChange(1)} expanded={uiState}>
          <AccordionSummary
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Accordion 1</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
              sit amet blandit leo lobortis eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
      }} />


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
