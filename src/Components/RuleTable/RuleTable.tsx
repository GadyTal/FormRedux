import { usePloni } from '../../Context/PloniCtx/PloniContext';
import React, { useEffect } from 'react';
import { RuleFormPager } from '../RuleForm/helpers';
import { useFormStateManger } from '../../Context/FormManagerStateCtx/FormManagerStateCtx';
import { useRuleReducer, ruleTableAtom, ruleTableEntities } from './reducers';
import { useRecoilState } from 'recoil';

export const RuleTable: React.FC<{}> = props => {
  const { open } = usePloni();
  // const { handleSubmit } = useStateManager();
  const { register, deRegister } = useFormStateManger();
  const { dispatch, state } = useRuleReducer();
  const [rules, setRules] = useRecoilState(ruleTableEntities);

  useEffect(() => {
    register(dispatch);

    () => {
      deRegister();
    };
  }, []);

  return (
    <div>
      Rule table
      {rules.map(e => (
        <div>{e.name}</div>
      ))}
      <button
        onClick={() =>
          open({ layout: 'modal', component: RuleFormPager(dispatch) })
        }
      >
        open rule form
      </button>
      <button
        onClick={() => {
          open({
            layout: 'modal',
            component: RuleFormPager(dispatch)
          });
          openFormManagertateInitial(data);
        }}
      >
        Create
      </button>
    </div>
  );
};
