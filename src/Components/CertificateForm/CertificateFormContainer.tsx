import React from "react";
import { CertificateFormPresentation } from "../CertificateFormPresentation";

const CertificateFormContainer = ({ dispatch }) => {
  const onSubmit = data => {
    // pub(data);
    dispatch('table.optimitiic.cert', data); // clientCertTable
    api(data).then(res => {
      dispatch<CertificateModel>('formStateManager.save.cert', {
        ...payload,
        type: 'Cert'
      }); // formStateManager
      dispatch<CertificateModel>('table.save', { ...payload }); // table
    });
  };

  return <CertificateFormPresentation changePage={changePage} open={open} />;
};
