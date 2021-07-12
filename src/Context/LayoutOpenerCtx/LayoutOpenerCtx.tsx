import React from 'react';
import { CurrentOpen, OpenComponentFn } from '../../Types/types';

export const LayoutOpenerCtx = React.createContext<{ current: CurrentOpen, openFn: OpenComponentFn }>({ current: undefined as unknown as CurrentOpen, openFn: (() => { }) as OpenComponentFn });

const LayoutOpenerProvider: React.FC<{ renderProps: (current: CurrentOpen, openFn: OpenComponentFn) => JSX.Element }> = props => {
  const { renderProps } = props;

  const [current, setCurrent] = React.useState<CurrentOpen>();

  const openFn: OpenComponentFn = (current: CurrentOpen) => {
    console.log(current);
    setCurrent(current);
  };

  return (
    <LayoutOpenerCtx.Provider value={{ current: current as CurrentOpen, openFn }}>
      {renderProps(current as CurrentOpen, openFn)}
    </LayoutOpenerCtx.Provider>
  );
};

export const useLayoutOpener = () => {
  const layoutOpenerCtx = React.useContext(LayoutOpenerCtx);

  return {
    openFn: (current: CurrentOpen) => {
      console.log('opened', current);
      layoutOpenerCtx.openFn && layoutOpenerCtx.openFn(current);
    }
  };
};

export default LayoutOpenerProvider;
