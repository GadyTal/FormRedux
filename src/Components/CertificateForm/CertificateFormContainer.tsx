import React from "react";

export const CertificateFormContainer: React.FC<{ renderProp: (onSubmit: (data: any) => JSX.Element)}> = (props) => {
  const { renderProp } = props;
  
  const onSubmit = (data: any) => {
    dispatch('table.optimitiic.cert', data); // clientCertTable
    // api(data).then(res => {
    //   dispatch<CertificateModel>('formStateManager.save.cert', {
    //     ...payload,
    //     type: 'Cert'
    //   }); // formStateManager
    //   dispatch<CertificateModel>('table.save', { ...payload }); // table
    // });
  };

  return renderProp(onSubmit);
};
