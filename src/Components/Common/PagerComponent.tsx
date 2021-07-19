import { usePager } from "../../hooks/usePager/usePager";

interface PagerComponentProps {
  entityStateMachine: any;
  entityStateMachineOptions: any;
  renderProps: (changePage: (pageId: string) => void, currentPage: any, activePageId: string) => JSX.Element;
}

export const PagerComponent: React.FC<PagerComponentProps> = (props) => {
  const { entityStateMachine, entityStateMachineOptions, renderProps } = props;
  const { changePage, currentPage, activePageId } = usePager(entityStateMachine, entityStateMachineOptions);

  return renderProps(changePage, currentPage, activePageId);
}