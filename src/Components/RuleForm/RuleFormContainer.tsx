import React from "react";
import { connect, ConnectedProps } from "react-redux";
import { saveEntity, deleteEntity, updateEntity, editEntity, RuleEntity, RootState } from "../../Store/store";

interface RuleFormConainerProps extends  PropsFromRedux {
  renderProp: (initState: Record<string,any>, onSubmit: (data: any) => Promise<string>, localEditEntity: (data?: RuleEntity) => void
  ) => JSX.Element;
}

export const RuleFormContainer: React.FC<RuleFormConainerProps> = (props) => {
  const { renderProp, saveEntity, editEntity, currentEditEntity = {} } = props;

  const onSubmit = (data: RuleEntity = {name: "Rule1", id: "1"}) => {
    return new Promise<string>((res, rej) => {
      setTimeout(() => {
        if(currentEditEntity) {
          saveEntity(data)
          res('finish');
        } else {
          rej('no edit entity')
        }
      }, 3000)
    })
  };

  const localEditEntity = (data: RuleEntity = {name: "Rule1", id: "1"}) => {
    props.editEntity(data);
  }

  return renderProp(currentEditEntity, onSubmit, localEditEntity)
};

const connector = connect((state: RootState) => ({
  currentEditEntity: state.rule.currentEditEntity
}), {
  saveEntity,
  deleteEntity,
  updateEntity,
  editEntity
});

type PropsFromRedux = ConnectedProps<typeof connector>

export default connector(RuleFormContainer);
