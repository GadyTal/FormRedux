import React from "react";
import { CertificateFormPresentation } from "./CertificateFormPresentation";

export const CertificateFormContainer = (props: any) => {
  const { dispatch, changePage, openFn } = props;
  const onSubmit = (data: any) => {
    // pub(data);
    dispatch('table.optimitiic.cert', data); // clientCertTable
    // api(data).then(res => {
    //   dispatch<CertificateModel>('formStateManager.save.cert', {
    //     ...payload,
    //     type: 'Cert'
    //   }); // formStateManager
    //   dispatch<CertificateModel>('table.save', { ...payload }); // table
    // });
  };

  return <CertificateFormPresentation changePage={changePage} openFn={openFn} onSubmit={onSubmit} />;
};
