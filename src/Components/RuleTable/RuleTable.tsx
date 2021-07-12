import React from 'react';
import { useLayoutOpener } from '../../Context/PloniCtx/PloniContext';
import { RuleFormPager } from '../RuleForm/RuleFormPager';

export const RuleTable: React.FC<{}> = props => {
  const { open } = useLayoutOpener();

  return (
    <div>
      Rule table
      <button
        onClick={() =>
          open({ layout: 'modal', component: RuleFormPager })
        }
      >
        open rule form
      </button>
      <button
        onClick={() => {
          open({
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
