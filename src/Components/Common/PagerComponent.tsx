import { connect, ConnectedProps, useSelector } from "react-redux";
import { createMachine } from "xstate";
import { usePager } from "../../hooks/usePager/usePager";
import { RootState } from "../../Store/store";
import { EntityType } from "../../Types/types";

interface PagerComponentProps {
  type: EntityType;
  entityStateMachine: any;
  entityStateMachineOptions: any;
  renderProps: (changePage: (pageId: string) => void, currentPage: any, activePageId: string) => JSX.Element;
}

export const PagerComponent: React.FC<PagerComponentProps> = (props) => {
  const { type, entityStateMachine, entityStateMachineOptions, renderProps } = props;

  const storeSlice = useSelector<RootState, any>((storeState) => {
    for (const slice in storeState) {
      if (type == slice as EntityType) {
       return storeState[slice as EntityType]; 
      }
    }
  });

  if (storeSlice.form.activePageId) {
    entityStateMachine.initial = storeSlice.form.activePageId;
  }
  
  const { changePage, currentPage, activePageId } = usePager(createMachine(entityStateMachine), entityStateMachineOptions);

  return renderProps(changePage, currentPage, activePageId);
}