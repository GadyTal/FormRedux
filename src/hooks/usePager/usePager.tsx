import { useMachine } from '@xstate/react';
import { useEffect } from 'react';

export const usePager = (stateMachineConfig: any, config2: any, setActivePageId: (pageId: string) => void) => {
  const [state, send] = useMachine(stateMachineConfig, config2);

  // TODO - use stateX
  useEffect(() => {
    setActivePageId(state.value as string);
  }, [state.value])

  return {
    currentPage: stateMachineConfig.states[state.value as string],
    changePage: send,
    activePageId: state.value as string
  };
};
