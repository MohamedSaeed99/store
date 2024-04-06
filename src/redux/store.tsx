import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { productReducer } from './features/product_slice'
import { TypedUseSelectorHook, useSelector } from 'react-redux'
import persistReducer from 'redux-persist/es/persistReducer'
import storage from 'redux-persist/lib/storage';

const cartPersistConfig = {
   key: "cart",
   storage: storage,
   whitelist: ["cartState"]
}

const rootReducer = combineReducers({
   cart: persistReducer(cartPersistConfig, productReducer)
})

export const store = configureStore({
   reducer: rootReducer,
   middleware: (getDefaultMiddleware) => getDefaultMiddleware({
      serializableCheck: false
   })
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;