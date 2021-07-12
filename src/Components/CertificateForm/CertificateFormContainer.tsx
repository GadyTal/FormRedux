import React from "react";
import { connect, ConnectedProps } from "react-redux";

interface CertificateFormConainerProps extends  PropsFromRedux {
  renderProp: (onSubmit: (data: any) => void) => JSX.Element;
}

export const CertificateFormContainer: React.FC<CertificateFormConainerProps> = (props) => {
  const { renderProp } = props;

  const onSubmit = (data: any) => {
    // console.log(data);
    saveEntity(data);
    // dispatch('table.optimitiic.cert', data); // clientCertTable
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

const connector = connect(null, {
  saveEntity,
  deleteEntity,
  updateEntity
});

type PropsFromRedux = ConnectedProps<typeof connector>

export default connector(CertificateFormContainer);

