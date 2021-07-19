import { useDispatch, useSelector } from 'react-redux';
import { useLayoutOpener } from '../../Context/LayoutOpenerCtx/LayoutOpenerCtx';
import { RootState } from '../../Store/store';
import { CurrentOpen, EntityType } from '../../Types/types';

export const useFormOpener = (entityTypes: EntityType[]) => {
  const { openFn, close } = useLayoutOpener();
  const storeSlice = useSelector<RootState, any>((storeState) => {
    const states: {[key: string]: any} = {};

    for (const slice in storeState) {
      if (entityTypes.includes(slice as EntityType)) {
        states[slice as EntityType] = storeState[slice as EntityType];
      }
    }

    return states;
  });
  
  const dispatch = useDispatch();
  let isLoading;

  const getData = (entities?: any[], entityId?: string,) => {
    // Update
    if (entityId && entities?.length) {
      const index = entities.findIndex((entity: any) => entity.id === entityId);
      if (index !== -1) {
        return Promise.resolve(entities[index]);
      }

      return Promise.resolve({ id: entityId });
    }

    // New data - 
    return Promise.resolve({ id: entityId });
  }


  // Public
  const openEdit = async (currentOpen: CurrentOpen, entityId: string, entityType: EntityType) => {
    isLoading = true;
    const { entities } = storeSlice[entityType];

    const entity = await getData(entities, entityId);
    if (!entity) {
      console.error("Can't find entity!");
      return;
    }

    dispatch({ type: `${entityType}/editFormEntity`, payload: entity });

    isLoading = false;
    openFn(currentOpen) // open layout
  }

  const openCreate = async (currentOpen: CurrentOpen, entityType: EntityType) => {
    isLoading = true;
    const entity = await getData() // default

    dispatch({ type: `${entityType}/editFormEntity`, payload: entity });

    isLoading = false;
    openFn(currentOpen)
  }

  return {
    close,
    openEdit,
    openCreate,
    isLoading
  };
}