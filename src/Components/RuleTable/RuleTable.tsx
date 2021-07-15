import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { useLayoutOpener } from '../../Context/LayoutOpenerCtx/LayoutOpenerCtx';
import { useFormOpener } from '../../hooks/useFormOpener/useFormOpeners';
import { RuleEntity } from '../../Store/ruleStore';
import { deleteRuleEntity, editRuleFormEntity, RootState } from '../../Store/store';
import { EntityType } from '../../Types/types';
import { RuleFormPager } from '../RuleForm/RuleFormPager';

const RuleTable: React.FC<PropsFromRedux> = props => {
  const { editRuleFormEntity, deleteRuleEntity, rules } = props;
  const { openFn } = useLayoutOpener();
  const { openEdit, openCreate, isLoading } = useFormOpener();

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

      {rules.map((entity: RuleEntity, index: number) => <div>{entity.name}

        <button
          key={entity.name + "-" + index}
          onClick={() => {
            // Edit
            openEdit(EntityType.Rule, { layout: 'modal', component: RuleFormPager, size: {} }, entity.id);
          }}
        >
          edit
        </button>
      </div>)}
    </div>
  );
};



const connector = connect((state: RootState) => { return { rules: state.Rule.entities } }, {
  editRuleFormEntity,
  deleteRuleEntity,
});

type PropsFromRedux = ConnectedProps<typeof connector>

export default connector(RuleTable);