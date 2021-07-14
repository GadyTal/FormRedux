import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
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
    rule: ruleSlice.reducer,
    certificate: certificateSlice.reducer,
    portalDesign: portalDesignSlice.reducer
  },
});

export const { saveRuleEntity, deleteRuleEntity, updateRuleEntity, editRuleFormEntity } = ruleSlice.actions
export const { saveCertEntity, deleteCertEntity, updateCertEntity } = certificateSlice.actions
export const { savePortalDesignEntity, deletePortalDesignEntity, updatePortalDesignEntity } = portalDesignSlice.actions

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch