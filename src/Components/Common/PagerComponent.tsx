import { createMachine } from "xstate";
import { usePager } from "../../hooks/usePager/usePager";
import { EntityType } from "../../Types/types";

interface PagerComponentProps {
  entityStateMachine: any;
  entityStateMachineOptions: any;
  initialPage?: string;
  renderProps: (changePage: (pageId: string) => void, currentPage: any, activePageId: string) => JSX.Element;
}

const PagerComponent: React.FC<PagerComponentProps> = (props) => {
  const { entityStateMachine, entityStateMachineOptions, initialPage, renderProps } = props;

  if (initialPage) {
    entityStateMachine.initial = initialPage;
  }
  
  const { changePage, currentPage, activePageId } = usePager(createMachine(entityStateMachine), entityStateMachineOptions);

  return renderProps(changePage, currentPage, activePageId);
}

export default PagerComponent