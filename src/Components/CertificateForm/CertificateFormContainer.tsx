import React from "react";
import { connect, ConnectedProps } from "react-redux";
import { CertEntity } from "../../Store/certificateStore";
import { deleteCertEntity, saveCertEntity, updateCertEntity } from "../../Store/store";

interface CertificateFormConainerProps extends  PropsFromRedux {
  renderProp: (initState: Record<string,any>, onSubmit: (data: any) => void) => JSX.Element;
}

export const CertificateFormContainer: React.FC<CertificateFormConainerProps> = (props) => {
  const { renderProp } = props;

  const onSubmit = (data: CertEntity = {name: "cert1", id: "1"}) => {
    props.saveCertEntity(data);
  };

  return renderProp({}, onSubmit);
};

const connector = connect(null, {
  saveCertEntity,
  deleteCertEntity,
  updateCertEntity
});

type PropsFromRedux = ConnectedProps<typeof connector>

export default connector(CertificateFormContainer);

