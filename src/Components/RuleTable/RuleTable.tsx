import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { useFormOpener } from '../../hooks/useFormOpener/useFormOpener';
import { deleteEntity, editFormEntity, RuleEntity } from '../../Store/ruleStore';
import { RootState } from '../../Store/store';
import { EntityType } from '../../Types/types';
import { RuleFormPager } from '../RuleForm/RuleFormPager';

const RuleTable: React.FC<PropsFromRedux> = props => {
  const { editFormEntity, deleteEntity, rules } = props;
  const { openEdit, openCreate, isLoading } = useFormOpener([EntityType.Rule]);

  return (
    <div>
      Rule table
      <button
        onClick={() => {
          // Create
          openCreate({ layout: 'modal', component: RuleFormPager }, EntityType.Rule);
        }}
      >
        open rule form
      </button>

      {rules.map((entity: RuleEntity, index: number) => <div key={entity.name + "-" + index}>{entity.name}
        <button
          onClick={() => {
            // Edit
            openEdit({ layout: 'modal', component: RuleFormPager, size: {} }, entity.id, EntityType.Rule);
          }}
        >
          edit
        </button>
      </div>)}
    </div>
  );
};



const connector = connect((state: RootState) => { return { rules: state.Rule.entities } }, {
  editFormEntity,
  deleteEntity,
});

type PropsFromRedux = ConnectedProps<typeof connector>

export default connector(RuleTable);