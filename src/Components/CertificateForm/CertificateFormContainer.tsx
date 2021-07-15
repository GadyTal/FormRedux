import React from "react";
import { connect, ConnectedProps } from "react-redux";
import { CertEntity, deleteEntity, saveEntity, updateEntity } from "../../Store/certificateStore";

interface CertificateFormConainerProps extends  PropsFromRedux {
  renderProp: (initState: Record<string,any>, onSubmit: (data: any) => void) => JSX.Element;
}

export const CertificateFormContainer: React.FC<CertificateFormConainerProps> = (props) => {
  const { renderProp } = props;

  const onSubmit = (data: CertEntity = {name: "cert1", id: "1"}) => {
    props.saveEntity(data);
  };

  return renderProp({}, onSubmit);
};

const connector = connect(null, {
  deleteEntity, saveEntity, updateEntity
});

type PropsFromRedux = ConnectedProps<typeof connector>

export default connector(CertificateFormContainer);

