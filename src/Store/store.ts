import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import { EntityType } from '../Types/types';
import { certificateSlice } from './certificateStore';
import { portalDesignSlice } from './portalDesignStore';
import { ruleSlice } from './ruleStore';

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export interface EntitySliceState<Model> {
  entities: Model[];
  form: {
    current?: Model
  }
}

export const store = configureStore({
  reducer: {
    [EntityType.Rule]: ruleSlice.reducer,
    [EntityType.Certificate]: certificateSlice.reducer,
    [EntityType.PortalDesign]: portalDesignSlice.reducer
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch