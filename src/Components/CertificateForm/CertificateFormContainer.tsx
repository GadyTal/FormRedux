import React, { useContext } from "react";

const CertificateFormContainer = ({ tableDispacher, formstateDischer }) => {
  const FormStateManager = useContext(FormStateManager);

  const onSubmit = data => {
    // pub(data);
    tabledispatcher('table.optimitiic.cert', data); // clientCertTable
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
