import React, { useEffect } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { setActivePageId, setUiState } from '../../Store/ruleStore';
import { RootState } from '../../Store/store';

interface UiStateContextProps { uiState: Record<string, Record<string, any>>, setLocalUiState: (state: Record<string, any>) => void; };

export const UiStateCtx = React.createContext<UiStateContextProps>({ uiState: {}, setLocalUiState: () => null });

const UiStateContextProvider: React.FC<{ id: string, renderProp: (setUiState: () => void) => JSX.Element } & PropsFromRedux> = (props) => {
  const { renderProp, id, setActivePageId, setUiState, uiState } = props;

  useEffect(() => {
    if (!uiState[id]) {
      uiStateRef.current = {}
    }
  }, [id]);

  const uiStateRef = React.useRef<Record<string, any>>({});

  const setLocalUiState = (incomingUiState: Record<string, any>) => {
    uiStateRef.current = { ...uiStateRef.current, ...incomingUiState }
  }

  const setUiStateRedux = () => {
    setUiState({ [id]: uiStateRef.current });
    setActivePageId(id);
  }

  return (
    <UiStateCtx.Provider value={{ uiState: uiStateRef.current || uiState[id] || {}, setLocalUiState }}>
      {renderProp(setUiStateRedux)}
    </UiStateCtx.Provider>
  );
};

export const useUiState = () => {
  const uiState = React.useContext(UiStateCtx);

  return uiState
};

const connector = connect((state: RootState) => { return { uiState: state.Rule.form.uiState } }, { setActivePageId, setUiState });

type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(UiStateContextProvider);
