import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { useLayoutOpener } from '../../Context/LayoutOpenerCtx/LayoutOpenerCtx';
import { RootState, editEntity, deleteEntity } from '../../Store/store';
import { RuleFormPager } from '../RuleForm/RuleFormPager';

const useOpenForm = (editEntity: (e: any) => void) => {
  const { openFn } = useLayoutOpener();


  return {
    edit: (e: any) => {
      openFn({
        layout: 'modal',
        component: RuleFormPager
      });
      editEntity(e)
    } ,
    create: () => {
      openFn({ layout: 'modal', component: RuleFormPager })
            editEntity({id: "0", name: ""})
    }
  }
}

const RuleTable: React.FC<PropsFromRedux> = props => {
  const { editEntity, deleteEntity } = props;
  const { openFn } = useLayoutOpener();

  return (
    <div>
      Rule table
      <button
        onClick={() =>
          {
            openFn({ layout: 'modal', component: React.forwardRef((props) => {
              return <RuleFormPager openFn={props.openFn} close={props.close} />
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
              return <RuleFormPager openFn={props.openFn} close={props.close} id={rule.id} />
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