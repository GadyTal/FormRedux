import { useMachine, useSelector } from '@xstate/react';
import React from 'react';
import { StateMachine } from 'xstate';
import { PagerPresenationComponentProps } from '../../Types/types';

type LightEvent = { type: 'SUBMIT', schema: object, Component: React.FC<PagerPresenationComponentProps> }

type Schema = {schema: Record<string,any>, Component: React.FC<PagerPresenationComponentProps>}

export const usePager = (config: StateMachine<Schema, any, LightEvent, {
  value: 'init';
  context: Schema;
} | {
  value: 'advanceSettings';
  context: Schema;
}>) => {
  const [state, send, service] = useMachine(config);
  const current = useSelector(service, (state) => state.context);

  return {
    currentPage: config.states[state.value as string].context,
    changePage: (id: string) => {
      send(id as any);
    } 
  };
};
