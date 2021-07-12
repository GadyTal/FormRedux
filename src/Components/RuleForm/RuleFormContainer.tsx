import React from "react";
import { connect, ConnectedProps } from "react-redux";
import { saveEntity, deleteEntity, updateEntity, AppDispatch } from "../../Store/store";

interface RuleFormConainerProps extends  PropsFromRedux {
  renderProp: (onSubmit: (data: any) => void) => JSX.Element;
}

export const RuleFormContainer: React.FC<RuleFormConainerProps> = (props) => {
  const { renderProp, saveEntity } = props;

  const onSubmit = (data: any) => {
    
    api(data).then(res => {
      saveEntity(res);
      // dispatch<RuleModel>('formStateManager.save', {
      //   ...payload,
      //   type: 'Cert'
      // });
      // dispatch<RuleModel>('table.save', { ...payload }); // table
    });
  };

  return renderProp(onSubmit)
};

const connector = connect(null, {
  saveEntity,
  deleteEntity,
  updateEntity
});

type PropsFromRedux = ConnectedProps<typeof connector>

export default connector(RuleFormContainer);
