import { Action, configureStore, createSlice, PayloadAction, ThunkAction } from '@reduxjs/toolkit';
import { CurrentOpen } from '../Types/types';
import applicationSlice from './applicationSlice';

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

interface EntitySliceState<Model> {
  entities: Model[];
  form: {
    current?: Model
  }
}

const ruleInitialState: EntitySliceState<RuleEntity> = {
  entities: [
    {id: '1', name: 'rulePredfined1'},
    {id: '2', name: 'rulePredfined2'},
    {id: '3', name: 'rulePredfined3'}
  ],
  form: {
    current: undefined
  }
};

export interface RuleEntity {
  id: string;
  name: string;
  certificateModel?: CertEntity
}

const certInitialState: EntitySliceState<CertEntity> = {
  entities: [
    {id: '1', name: 'certPredfined1'},
    {id: '2', name: 'certPredfined2'},
    {id: '3', name: 'certPredfined3'}
  ],
  form: {
  }
};

export const certificateSlice = createSlice({
  name: 'cert',
  initialState: certInitialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    saveCertEntity: (state, action: PayloadAction<CertEntity>) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.entities = [...state.entities, action.payload]; //table
    },
    deleteCertEntity: (state, action: PayloadAction<CertEntity>) => {
      const entityToDelete = state.entities.filter(entity => entity.id === action.payload.id);

    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    updateCertEntity: (state, action: PayloadAction<CertEntity>) => {
      const index = state.entities.findIndex((entity) => entity.id == action.payload.id);
      if (index !== -1) {
        state.entities[index] = action.payload;
      }
    }
  }
});



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
    },
    editEntity: (state, action: PayloadAction<RuleEntity>) => {
      state.form.current = action.payload
    },
  },
  extraReducers: (builder) => {
    builder.addCase(certificateSlice.actions.saveCertEntity, (state, action) => {
      if (state.form.current) {
        state.form.current = {...state.form.current, certificateModel: action.payload }
      }
    })
  }
});

export interface CertEntity extends RuleEntity {}


export const store = configureStore({
  reducer: {
    rule: ruleSlice.reducer,
    certificate: certificateSlice.reducer,
    application: applicationSlice.reducer
  },
});

export const { saveEntity, deleteEntity, updateEntity, editEntity } = ruleSlice.actions
export const { saveCertEntity, deleteCertEntity, updateCertEntity } = certificateSlice.actions

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch