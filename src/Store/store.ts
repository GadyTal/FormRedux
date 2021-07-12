import { Action, configureStore, createSlice, PayloadAction, ThunkAction } from '@reduxjs/toolkit';

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

const ruleInitialState: { entities: RuleEntity[] } = {
  entities: [] // ruleEntities
};

interface RuleEntity {
  id: string;
  name: string;
}

export const ruleSlice = createSlice({
  name: 'rule',
  initialState: ruleInitialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    saveEntity: (state, action: PayloadAction<RuleEntity>) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.entities = [...state.entities, action.payload];
    },
    deleteEntity: (state, action: PayloadAction<RuleEntity>) => {
      const entityToDelete = state.entities.filter(entity => entity.id === action.payload.id);

    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    updateEntity: (state, action: PayloadAction<RuleEntity>) => {
      const index = state.entities.findIndex((entity) => entity.id == action.payload.id);
      if (index !== -1) {
        state.entities[index] = action.payload;
      }
    }
  }
});

export const store = configureStore({
  reducer: {
    rule: ruleSlice.reducer
  },
});

export const { saveEntity, deleteEntity, updateEntity } = ruleSlice.actions
