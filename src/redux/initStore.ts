import {configureStore, Store} from '@reduxjs/toolkit';
import {createRootReducer} from './store/createRootReducer';

export const initStore = (): Store => {
  const reducer = createRootReducer();
  //const middleware: any[] = [];
  const store = configureStore({reducer});

  return store;
};


export const store = initStore();

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;


