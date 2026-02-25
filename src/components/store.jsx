import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import appReducer from "./actionslice";

const persistConfig = {key: "root",storage,whitelist: ["app"],};
const rootReducer = combineReducers({app: appReducer,});
const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = configureStore({ reducer: persistedReducer,middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck: false, }),});

export const persistor = persistStore(store);