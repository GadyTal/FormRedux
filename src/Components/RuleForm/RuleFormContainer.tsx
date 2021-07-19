import React, { useEffect } from "react";
import { connect, ConnectedProps } from "react-redux";
import { saveEntity, deleteEntity, updateEntity, editEntity, RuleEntity, RootState, store } from "../../Store/store";

interface RuleFormConainerProps extends  PropsFromRedux {
  renderProp: (initState: Record<string,any>, onSubmit: (data: any) => Promise<string>, localEditEntity: (data?: RuleEntity) => void
  ) => JSX.Element;
  entityId?: string;
}

export const RuleFormContainer: React.FC<RuleFormConainerProps> = (props) => {
  const { renderProp, saveEntity, editEntity, currentEditEntity, rules } = props;

  const getEntity = () => {
    if(props.currentEditEntity) {
      return props.currentEditEntity;
    }
    if (props.entityId) {
      const rule = rules.find((rule) => rule.id === props.entityId);
      if (rule) {
        return rule;
      }
    }
    return { id: "0", name: "fakeinitData"}
  }

  // useEffect(() => {
  //   if (props.entityId) {
  //     const rule = rules.find((rule) => rule.id === props.entityId);
  //     if (rule) {
  //       editEntity(rule);
  //       return
  //     }
  //   }
  //   editEntity({id: "0", name: "fakeInitData"} as RuleEntity)
  // }, [])

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

  return renderProp(getEntity(), onSubmit, localEditEntity)
};

const connector = connect((state: RootState) => ({
  currentEditEntity: state.rule.form.current,
  rules: state.rule.entities
}), {
  saveEntity,
  deleteEntity,
  updateEntity,
  editEntity
});

type PropsFromRedux = ConnectedProps<typeof connector>

export default connector(RuleFormContainer);
