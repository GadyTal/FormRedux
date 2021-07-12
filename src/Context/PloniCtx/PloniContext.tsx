import React, { Component } from 'react';
import { OpenComponentFn } from '../../Types/types';

export const PloniCtx = React.createContext({ open: () => {} });

const PloniCtxProvider: React.FC<React.PropsWithChildren<{}>> = props => {
  const { children } = props;
  const [current, setCurrent] = React.useState({
    layout: undefined,
    component: undefined
  } as CurrentOpen);

  const open: OpenComponentFn = (current: CurrentOpen) => {
    console.log(current);
    setCurrent(current);
  };

  return (
    <PloniCtx.Provider value={{ current, open }}>
      {children(current, open)}
    </PloniCtx.Provider>
  );
};

export const usePloni = () => {
  const plonixCtx = React.useContext(PloniCtx);

  return {
    open: (...arg) => {
      console.log('sad');
      plonixCtx.open(...arg);
    }
  };
};

export default PloniCtxProvider;
