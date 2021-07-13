import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { useLayoutOpener } from '../../Context/LayoutOpenerCtx/LayoutOpenerCtx';
import { RootState, editEntity, deleteEntity } from '../../Store/store';
import { RuleFormPager } from '../RuleForm/RuleFormPager';

const RuleTable: React.FC<PropsFromRedux> = props => {
  const { editEntity, deleteEntity } = props;
  const { openFn } = useLayoutOpener();

  return (
    <div>
      Rule table
      <button
        onClick={() =>
          {
            openFn({ layout: 'modal', component: RuleFormPager })
            editEntity({id: "0", name: ""})
          }
        }
      >
        open rule form
      </button>

      {props.rules.map(e => <div>{e.name}
      
        <button
        onClick={() => {
          openFn({
            layout: 'modal',
            component: RuleFormPager
          });
          editEntity(e)
        }}
      >
        edit
      </button>
      </div>)}
    </div>
  );
};



const connector = connect((state: RootState) => { return { rules: state.rule.entities } }, {
  editEntity,
  deleteEntity,
});

type PropsFromRedux = ConnectedProps<typeof connector>

export default connector(RuleTable);