import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ApplicationEntity {
    id: string;
    name: string;
}

interface EntitySliceState<Model> {
    entities: Model[];
    form: {
      current?: Model
    }
  }

const applicationInitialState: EntitySliceState<ApplicationEntity> = {
    entities: [
      {id: '1', name: 'rulePredfined1'},
      {id: '2', name: 'rulePredfined2'},
      {id: '3', name: 'rulePredfined3'}
    ],
    form: {
      current: undefined
    }
  };

export const applicationSlice = createSlice({
    name: 'Application',
    initialState: applicationInitialState,
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: {
      saveEntity: (state, action: PayloadAction<ApplicationEntity>) => {
        // Redux Toolkit allows us to write "mutating" logic in reducers. It
        // doesn't actually mutate the state because it uses the Immer library,
        // which detects changes to a "draft state" and produces a brand new
        // immutable state based off those changes
        state.entities = [...state.entities, action.payload];
      },
      deleteEntity: (state, action: PayloadAction<ApplicationEntity>) => {
        const entityToDelete = state.entities.filter(entity => entity.id === action.payload.id);
  
      },
      // Use the PayloadAction type to declare the contents of `action.payload`
      updateEntity: (state, action: PayloadAction<ApplicationEntity>) => {
        const index = state.entities.findIndex((entity) => entity.id == action.payload.id);
        if (index !== -1) {
          state.entities[index] = action.payload;
        }
      },
      editEntity: (state, action: PayloadAction<ApplicationEntity>) => {
        state.form.current = action.payload
      },
    }
  });

  export default applicationSlice;