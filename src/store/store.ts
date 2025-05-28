import { configureStore } from '@reduxjs/toolkit'
import cartSlice  from './cartSlice/cartSlice';
import productsReducer from './productsSlice/productsSlice';
import feedbacksReducer from './feedbacksSlice/feedbacksSlice';

 const store = configureStore({
    reducer:{
        cart: cartSlice,
        products: productsReducer,
        feedbacks: feedbacksReducer
    }
})
export type RootState = ReturnType<typeof store.getState>;

// Экспортируйте тип dispatch, если необходимо
export type AppDispatch = typeof store.dispatch;
export default store;