import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { useLayoutOpener } from '../../Context/LayoutOpenerCtx/LayoutOpenerCtx';
import { RootState, RuleEntity } from '../../Store/store';
import { RuleFormPager } from '../RuleForm/RuleFormPager';

const RuleTable: React.FC<PropsFromRedux> = props => {
  const { openFn } = useLayoutOpener();

  return (
    <div>
      Rule table
      {props.rules.map(e => <div>{e.name}</div>)}
      <button
        onClick={() =>
          openFn({ layout: 'modal', component: RuleFormPager })
        }
      >
        open rule form
      </button>
      <button
        onClick={() => {
          openFn({
            layout: 'modal',
            component: RuleFormPager
          });
        }}
      >
        Create
      </button>
    </div>
  );
};



const connector = connect((state: RootState) => { return { rules: state.rule.entities } });

type PropsFromRedux = ConnectedProps<typeof connector>

export default connector(RuleTable);