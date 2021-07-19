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
            openFn({ 
              layout: 'modal', 
              component: React.forwardRef((props) => {
                return <RuleFormPager renderProp={(Comp) => <Comp openFn={props.openFn} close={props.close} />} />
              })
            })
          }
        }
      >
        open rule form
      </button>

      {props.rules.map(rule => <div>{rule.name}
      
        <button
        onClick={() => {
          openFn({
            layout: 'modal',
            component: React.forwardRef((props) => {
              return <RuleFormPager renderProp={(Comp) => <Comp entityId={rule.id} openFn={props.openFn} close={props.close} />} />
            })
          });
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