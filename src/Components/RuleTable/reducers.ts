const ruleTableReducer = () => {};

const ruleFormReducer = (type: string, payload: any, state: any) => {
  switch (type) {
    case 'formStateManager.save.cert':
      return { ...state, certificateId: payload.id };
  }
};

const combineReducers = (a: any, b: any) => {
  return { dispatch: () => null, state: {} };
};

export const useRuleReducer = () =>
  combineReducers(ruleTableReducer, ruleFormReducer);

// export const ruleTableAtom = atom({
//   key: 'ruleTable', // unique ID (with respect to other atoms/selectors)
//   default: '' // default value (aka initial value)
// });

// export const ruleFormAtom = atom({
//   key: 'ruleTableForm', // unique ID (with respect to other atoms/selectors)
//   default: '' // default value (aka initial value)
// });

// export const ruleState = atom({
//   key: 'ruleState',
//   default: {
//     entities: [],
//     form: {}
//   }
// });

// export const ruleTableEntities = selector({
//   key: 'ruleTableEntities', // unique ID (with respect to other atoms/selectors)
//   get: ({ get }) => {
//     const ruleStateAtom = get(ruleState);

//     return ruleStateAtom.entities;
//   }
// });
