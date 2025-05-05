import { configureStore } from '@reduxjs/toolkit';
import userReducer from './user/userSlice';
import cartReducer from './cartSlice/cartSlice';
import productsReducer from './productsSlice/productsSlice';
import feedbacksReducer from './feedbacksSlice/feedbacksSlice';
import { useDispatch, useSelector } from 'react-redux';
//import type { RootState, AppDispatch } from './store'; // Removed conflicting import

const store = configureStore({
  reducer: {
    user: userReducer,
    cart: cartReducer,
    products: productsReducer,
    feedbacks: feedbacksReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;

//  Используйте повсюду в вашем приложении вместо обычных `useDispatch` и `useSelector`
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: <TSelected>(
  selector: (state: RootState) => TSelected,
  equalityFn?: (left: TSelected, right: TSelected) => boolean
) => TSelected = useSelector;
