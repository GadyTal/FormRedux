import { useUiState } from "../../Context/UiStateCtx/UiStateCtx";

export interface UiStateConnectorProps {
  rednerProps: (cb: (id: any) => void, value: any) => JSX.Element;
  elementId: string;
}

const UiStateConnector: React.FC<UiStateConnectorProps> = (props) => {
  const { rednerProps, elementId } = props;
  const { uiState, setLocalUiState } = useUiState();

  return rednerProps((id) => setLocalUiState({ [elementId]: id }), uiState[elementId]);
}

export default UiStateConnector;