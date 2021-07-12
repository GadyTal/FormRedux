import React, { useState, useEffect } from 'react';

export const FormStateManagerCtx = React.createContext({
  state: {},
  updateState: data => {},
  register: reducer => null,
  deRegister: reducer => null
});

export const FormStateModelManagerProvider: React.FC<
  React.PropsWithChildren<{ open: OpenComponentFn }>
> = ({ children }) => {
  const [state, setState] = useState<any>({});
  const { current: reducer } = React.useRef({});

  useEffect(() => {
    // Register to the new events?
    reducer.current?.register();
  }, [reducer.current]);

  const register = newReducer => {
    reducer.current = newReducer;
  };

  const deRegister = () => {
    reducer.current = null;
  };

  return (
    <FormStateManagerCtx.Provider
      value={{
        state,
        updateFormState: (arg: any) => {
          setState(lState => ({ ...lState, ...arg }));
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
    updateFormState({ [name]: { ...state[name], ...localState } });
  };

  return {
    updateFormState: updateFormStateInternal,
    state,
    register,
    deRegister
  };
};
