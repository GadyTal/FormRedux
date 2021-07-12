import React, { useEffect, useState } from 'react';
import { OpenComponentFn } from '../../Types/types';

export const FormStateManagerCtx = React.createContext({
  state: {},
  updateFormState: (data: any) => {},
  register: (reducer: any) => null,
  deRegister: (reducer: any) => null
});

export const FormStateModelManagerProvider: React.FC<
  React.PropsWithChildren<{ open: OpenComponentFn }>
> = ({ children }) => {
  const [state, setState] = useState<any>({});
  const { current: reducer } = React.useRef({});

  useEffect(() => {
    // Register to the new events?
    // reducer?.register();
  }, [reducer]);

  const register = (newReducer: any) => {
    // reducer.current = newReducer;
    return null;
  };

  const deRegister = () => {
    // reducer = null;
    return null;
  };

  return (
    <FormStateManagerCtx.Provider
      value={{
        state,
        updateFormState: (arg: any) => {
          setState((lState: any) => ({ ...lState, ...arg }));
        },
        register,
        deRegister
      }}
    >
      {children}
    </FormStateManagerCtx.Provider>
  );
};

class Mediator {
  constructor() {}
}

export const useFormStateManger = (name: string) => {
  const { updateFormState, state, register, deRegister } = React.useContext(
    FormStateManagerCtx
  );

  const updateFormStateInternal = (localState: any) => {
    console.log(localState);
    updateFormState({ [name]: { ...(state as any)[name], ...localState } });
  };

  return {
    updateFormState: updateFormStateInternal,
    state,
    register,
    deRegister
  };
};
