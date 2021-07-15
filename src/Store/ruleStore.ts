import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { EntityType } from '../Types/types';
import { CertEntity, certificateSlice } from './certificateStore';
import { EntitySliceState } from "./store";

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
  certificateModel?: CertEntity;
}

export const ruleSlice = createSlice({
  name: EntityType.Rule,
  initialState: ruleInitialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    saveRuleEntity: (state, action: PayloadAction<RuleEntity>) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.entities = [...state.entities, action.payload];
    },
    deleteRuleEntity: (state, action: PayloadAction<RuleEntity>) => {
      const entityToDelete = state.entities.filter(entity => entity.id === action.payload.id);

    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    updateRuleEntity: (state, action: PayloadAction<RuleEntity>) => {
      const index = state.entities.findIndex((entity) => entity.id == action.payload.id);
      if (index !== -1) {
        state.entities[index] = action.payload;
      }
    },
    editRuleFormEntity: (state, action: PayloadAction<RuleEntity>) => {
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