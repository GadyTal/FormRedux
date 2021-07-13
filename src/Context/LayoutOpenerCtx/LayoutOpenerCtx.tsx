import React from 'react';
import { CurrentOpen, OpenComponentFn } from '../../Types/types';

export const LayoutOpenerCtx = React.createContext<{ current: CurrentOpen, openFn: OpenComponentFn, close: () => void }>({ current: undefined as unknown as CurrentOpen, openFn: (() => { }) as OpenComponentFn, close: () => {} });

const LayoutOpenerProvider: React.FC<{ renderProps: (current: CurrentOpen, openFn: OpenComponentFn, close: () => void) => JSX.Element }> = props => {
  const { renderProps } = props;

  const [current, setCurrent] = React.useState<CurrentOpen>();
  const {current: listRef} = React.useRef<CurrentOpen[]>([]);

  const openFn: OpenComponentFn = (current: CurrentOpen) => {
    listRef.push(current);
    setCurrent(current);
  };

  const close = () => {
    listRef.pop();
    const {length, [length-1]: last} = listRef;
    setCurrent(last)
  }

  return (
    <LayoutOpenerCtx.Provider value={{ current: current as CurrentOpen, openFn, close }}>
      {renderProps(current as CurrentOpen, openFn, close)}
    </LayoutOpenerCtx.Provider>
  );
};

export const useLayoutOpener = () => {
  const layoutOpenerCtx = React.useContext(LayoutOpenerCtx);

  return {
    openFn: (current: CurrentOpen) => {
      console.log('opened', current);
      layoutOpenerCtx.openFn && layoutOpenerCtx.openFn(current);
    },
    close: layoutOpenerCtx.close
  };
};

export default LayoutOpenerProvider;
