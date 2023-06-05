import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer } from 'redux-persist';
import loginSlice from "./login/loginSlice";


const loginPersistConfig={
    key:'login',
    storage: storage,
}
const persistedReducer = persistReducer(loginPersistConfig, loginSlice)
const store = configureStore({
    reducer: {
       login:persistedReducer
    },
});
export const persiStore = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
