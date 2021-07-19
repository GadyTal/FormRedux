export interface UiStateConnectorProps {
  onUiStateChange: (state: Record<string, any>) => void;
  rednerProps: (cb: (id: string) => void) => JSX.Element;
  elementId: string;
}

const UiStateConnector: React.FC<UiStateConnectorProps> = (props) => {
  const { rednerProps, onUiStateChange, elementId } = props;

  return rednerProps((id) => onUiStateChange({[elementId]: id}));
}

export default UiStateConnector;