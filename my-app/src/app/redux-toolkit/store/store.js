import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux'; 
import brandReducer from '../brandSlice';
import userReducer from '../userSlice';
import cartReducer from '../cartSlice';

// Cấu hình persist
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart'], 
};

// Kết hợp các reducer
const rootReducer = combineReducers({
  user: userReducer,
  brand: brandReducer,
  cart: cartReducer,
});

// Tạo persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, 
    }),
});

export const persistor = persistStore(store);
