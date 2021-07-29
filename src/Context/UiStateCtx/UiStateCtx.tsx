import React, { useEffect } from 'react';

interface UiStateContextProps { uiState: Record<string, Record<string, any>>, setLocalUiState: (state: Record<string, any>) => void; };

export const UiStateCtx = React.createContext<UiStateContextProps>({ uiState: {}, setLocalUiState: () => null });

export const UiStateContextProvider: React.FC<{ id: string, renderProp: (setUiState: () => void) => JSX.Element, onUiStateSave: (uiState: Record<string, Record<string, any>>) => void, uiState: Record<string, Record<string,any>> }> = (props) => {
  const { renderProp, id, onUiStateSave, uiState } = props;
  // const uiState = getUiState();

  useEffect(() => {
    if (!uiState[id]) {
      uiStateRef.current = null;
    }
  }, [id]);

  const uiStateRef = React.useRef<Record<string, any> | null>(null);

  const setLocalUiState = (incomingUiState: Record<string, any>) => {
    uiStateRef.current = { ...uiStateRef.current, ...incomingUiState }
  }

  const setUiStateRedux = () => {
    if (uiStateRef.current) {
      onUiStateSave({ [id]: uiStateRef.current });
    } 
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


export default UiStateContextProvider;