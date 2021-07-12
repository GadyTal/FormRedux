import React from "react";

export const RuleFormContainer: React.FC<{ renderProp: (onSubmit: (data: any) => JSX.Element)}> = (props) => {
  const { renderProp } = props;

  const onSubmit = (data: any) => {
    api(data).then(res => {
      dispatch<RuleModel>('formStateManager.save', {
        ...payload,
        type: 'Cert'
      });
      dispatch<RuleModel>('table.save', { ...payload }); // table
    });
  };

  return renderProp(onSubmit)
};
