import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { EntityType } from '../Types/types';
import { RuleEntity } from './ruleStore';
import { EntitySliceState } from "./store";

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
  name: EntityType.Certificate,
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

export interface CertEntity extends RuleEntity {}