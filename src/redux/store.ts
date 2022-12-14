import { configureStore } from '@reduxjs/toolkit';
import { mainReducer } from './reducer';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  WebStorage,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

//-----------------------------------------------------------------------------------//
const persistConfig:{key: string, storage: WebStorage, whitelist: string[]} = {
  key: 'root',
  storage,
  whitelist: ['items'],
};
const persistedReducer = persistReducer(persistConfig, mainReducer);

const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV === 'development',
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
let persistor = persistStore(store);
export { store, persistor };

export type RootState = ReturnType<typeof store.getState> //що таке рутстейт

export type AppDispatch = typeof store.dispatch
