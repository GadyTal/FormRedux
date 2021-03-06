import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { EntityType } from '../Types/types';
import { EntitySliceState } from "./store";

export interface PortalDesignEntity {
  id: string;
  name: string;
  color?: string;
}

const portalDesignInitialState: EntitySliceState<PortalDesignEntity> = {
  entities: [
    {id: '1', name: 'portalDesign', color: 'red'}
  ],
  form: {
    current: undefined
  }
};

export const portalDesignSlice = createSlice({
  name: EntityType.PortalDesign,
  initialState: portalDesignInitialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    saveEntity: (state, action: PayloadAction<PortalDesignEntity>) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.entities = [...state.entities, action.payload]; //table
    },
    deleteEntity: (state, action: PayloadAction<PortalDesignEntity>) => {
      const entityToDelete = state.entities.filter(entity => entity.id === action.payload.id);

    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    updateEntity: (state, action: PayloadAction<PortalDesignEntity>) => {
      const index = state.entities.findIndex((entity) => entity.id == action.payload.id);
      if (index !== -1) {
        state.entities[index] = action.payload;
      }
    }
  }
});

export const { saveEntity, deleteEntity, updateEntity } = portalDesignSlice.actions;