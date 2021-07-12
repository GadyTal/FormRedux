import React from 'react';
import { connect } from 'react-redux';
import { useLayoutOpener } from '../../Context/LayoutOpenerCtx/LayoutOpenerCtx';
import { RuleFormPager } from '../RuleForm/RuleFormPager';

const RuleTable: React.FC<{}> = props => {
  const { openFn } = useLayoutOpener();

  return (
    <div>
      Rule table
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

export default connect((state) => { return { rules: state.entities } })(RuleTable);