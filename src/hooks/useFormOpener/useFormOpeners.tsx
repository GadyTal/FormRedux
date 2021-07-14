import { CurrentOpen } from '../../Types/types';

export function useFormOpener<T>(editEntityAction: (state: any) => void, openFn: any, items: T[]) {
  let isLoading;

  const getData = (entityId?: string) => {
    // switch (type) {
    //   case entityType.Gady:
    //     return gady.getById();
    // }
    // Update
    if (entityId) {
      const index = items.findIndex((entity: any) => entity.id === entityId);
      if (index !== -1) {
        return Promise.resolve(items[index]);
      }

      return Promise.resolve({id: entityId});
    }

    // New data
    return Promise.resolve({id: entityId});
  }
  
  const openEdit = async(currentOpen: CurrentOpen, entityId: string) => {
    isLoading = true;
    const data = await getData(entityId) // api or defualt
    await editEntityAction(data); //redux

    isLoading = false;
    openFn(currentOpen) // open layout
  }

  const openCreate = async(currentOpen: CurrentOpen) => {
    isLoading = true;
    const data = await getData() // default
    await editEntityAction(data);

    isLoading = false;
    openFn(currentOpen)
  } 
  
  return {
    openEdit,
    openCreate,
    isLoading
  };
}