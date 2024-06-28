import {combineReducers, configureStore} from '@reduxjs/toolkit'
import userSlice from '../slices/userSlice';
import {persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage';
import persistStore from 'redux-persist/es/persistStore';

const combinedReducer = combineReducers({
        user : userSlice
})

const persistConfig = {
    key : 'root',
    storage,
    version:1
}

const persistedReducer = persistReducer(persistConfig,combinedReducer)


export const store  = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck:false,
    }),
})


export const persistor = persistStore(store);