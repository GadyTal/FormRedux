import { useMachine } from '@xstate/react';

export const usePager = (stateMachineConfig: any, config2: any) => {
  const [state, send] = useMachine(stateMachineConfig, config2);

  return {
    currentPage: stateMachineConfig.states[state.value as string],
    changePage: send,
    activePageId: state.value as string
  };
};
