import React from 'react';
import { OpenComponentFn } from '../../Types/types';

export const LayoutOpenerCtx = React.createContext({ open: () => {} });

const LayoutOpenerProvider: React.FC<React.PropsWithChildren<{}>> = props => {
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
    <LayoutOpenerCtx.Provider value={{ current, open }}>
      {children(current, open)}
    </LayoutOpenerCtx.Provider>
  );
};

export const useLayoutOpener = () => {
  const layoutOpenerCtx = React.useContext(LayoutOpenerCtx);

  return {
    open: (...arg) => {
      console.log('opened', ...args);
      layoutOpenerCtx.open(...arg);
    }
  };
};

export default LayoutOpenerProvider;
