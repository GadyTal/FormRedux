import React from "react";
import { connect, ConnectedProps } from "react-redux";
import { RuleEntity } from "../../Store/ruleStore";
import { deleteRuleEntity, editRuleFormEntity, RootState, saveRuleEntity, updateRuleEntity } from "../../Store/store";

interface RuleFormConainerProps extends  PropsFromRedux {
  renderProp: (initState: Record<string,any>, onSubmit: (data: any) => Promise<string>, localEditEntity: (data?: RuleEntity) => void
  ) => JSX.Element;
}

export const RuleFormContainer: React.FC<RuleFormConainerProps> = (props) => {
  const { renderProp, saveRuleEntity, editRuleFormEntity, currentEditEntity = {} } = props;

  const onSubmit = (data: RuleEntity = {name: "Rule1", id: "1"}) => {
    return new Promise<string>((res, rej) => {
      setTimeout(() => {
        if(currentEditEntity) {
          saveRuleEntity(data)
          res('finish');
        } else {
          rej('no edit entity')
        }
      }, 3000)
    })
  };

  const localEditEntity = (data: RuleEntity = {name: "Rule1", id: "1"}) => {
    editRuleFormEntity(data);
  }

  return renderProp(currentEditEntity, onSubmit, localEditEntity)
};

const connector = connect((state: RootState) => ({
  currentEditEntity: state.rule.form.current
}), {
  saveRuleEntity,
  deleteRuleEntity,
  updateRuleEntity,
  editRuleFormEntity
});

type PropsFromRedux = ConnectedProps<typeof connector>

export default connector(RuleFormContainer);
