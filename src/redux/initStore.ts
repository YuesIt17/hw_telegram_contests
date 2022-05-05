import {configureStore} from '@reduxjs/toolkit';
import {createRootReducer} from './store/createRootReducer';

export const initStore = () => {
  const reducer = createRootReducer();
  const store = configureStore({
    reducer,
  });

  return store;
};

export const store = initStore();

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
