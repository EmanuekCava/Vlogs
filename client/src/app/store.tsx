import thunk from 'redux-thunk';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import { configureStore } from "@reduxjs/toolkit";

import reducers from './server/reducers/index.reducer';

const persistedReducer = persistReducer({
    storage,
    version: 1,
    key: 'persist-vlogs'
}, reducers)

const store = configureStore({
    reducer: persistedReducer,
    devTools: process.env.NODE_ENV !== 'production',
    middleware: [thunk]
})

export default store