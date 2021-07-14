import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { useLayoutOpener } from '../../Context/LayoutOpenerCtx/LayoutOpenerCtx';
import { useFormOpener } from '../../hooks/useFormOpener/useFormOpeners';
import { RuleEntity } from '../../Store/ruleStore';
import { deleteRuleEntity, editRuleFormEntity, RootState } from '../../Store/store';
import { RuleFormPager } from '../RuleForm/RuleFormPager';

const RuleTable: React.FC<PropsFromRedux> = props => {
  const { editRuleFormEntity, deleteRuleEntity, rules } = props;
  const { openFn } = useLayoutOpener();
  const { openEdit, openCreate, isLoading } = useFormOpener<RuleEntity>(editRuleFormEntity, openFn, rules);

  return (
    <div>
      Rule table
      <button
        onClick={() => {
          // Create
          openCreate({ layout: 'modal', component: RuleFormPager });
        }}
      >
        open rule form
      </button>

      {rules.map(entity => <div>{entity.name}

        <button
          onClick={() => {
            // Edit
            openEdit({ layout: 'modal', component: RuleFormPager }, entity.id);
          }}
        >
          edit
        </button>
      </div>)}
    </div>
  );
};



const connector = connect((state: RootState) => { return { rules: state.rule.entities } }, {
  editRuleFormEntity,
  deleteRuleEntity,
});

type PropsFromRedux = ConnectedProps<typeof connector>

export default connector(RuleTable);