import React from 'react';
import { useLayoutOpener } from '../../Context/LayoutOpenerCtx/LayoutOpenerCtx';
import { RuleFormPager } from '../RuleForm/RuleFormPager';

export const RuleTable: React.FC<{}> = props => {
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
