import { useSelector } from 'react-redux';
import { useLayoutOpener } from '../../Context/LayoutOpenerCtx/LayoutOpenerCtx';
import { RootState } from '../../Store/store';
import { CurrentOpen, EntityType } from '../../Types/types';

export const useFormOpener = () => {
  const { openFn } = useLayoutOpener();
  let isLoading;

  const getStoreSlice = (type: EntityType) => {
    const storeSlice = useSelector<RootState, any>((state) => state[type]);

    const entities = storeSlice.entities;
    const actions = storeSlice.actions;

    return { entities, actions };
  }
  
  const getData = (entities?: any[], entityId?: string, ) => {
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
  const openEdit = async (type: EntityType, currentOpen: CurrentOpen, entityId: string) => {
    isLoading = true;
    const { entities, actions } = getStoreSlice(type);

    const entity = getData(entities, entityId);
    if (!entity) {
      console.error("Can't find entity!");
      return;
    }

    debugger;
    await actions(entity); //redux

    isLoading = false;
    openFn(currentOpen) // open layout
  }

  const openCreate = async (currentOpen: CurrentOpen) => {
    isLoading = true;
    const data = await getData() // default
    debugger;
    // await actions(data);

    isLoading = false;
    openFn(currentOpen)
  }

  return {
    openEdit,
    openCreate,
    isLoading
  };
}