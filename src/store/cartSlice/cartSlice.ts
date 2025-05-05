import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "http://localhost:5000/users/1";

// 1. Define a type for your Cart Item
interface CartItem {
  id: number;
  sizes: string;
  colors: string;
  count: number;
  [key: string]: any; // Allow other properties if needed, but be specific if you know them
}

interface UserData {
  cart: CartItem[];
}

const initialState = {
  cart: [] as CartItem[],
  status: 'idle' as 'idle' | 'loading' | 'success' | 'failed',
};

// 2.  Explicitly type the return of fetchCart
export const fetchCart = createAsyncThunk(
  'cart/fetchCart',
  async () => {
    const response = await axios.get<UserData>(API_URL);
    return response.data.cart;
  }
);

// 3. Explicitly type addCart
export const addCart = createAsyncThunk(
  'cart/addCart',
  async (payload: CartItem) => {
    const { data: user } = await axios.get<UserData>(API_URL);
    const findItem = user.cart.find(
      (item) =>
        item.id === payload.id &&
        item.sizes === payload.sizes &&
        item.colors === payload.colors
    );
    console.log(findItem);
    const updatedCart = findItem
      ? user.cart.map((item) =>
        item.id === payload.id ? { ...item, count: item.count + payload.count } : item
      )
      : [...user.cart, payload];

    const response = await axios.patch<UserData>(API_URL, { cart: updatedCart });
    return response.data.cart;
  }
);

// 4. Explicitly type removeCart
export const removeCart = createAsyncThunk<number, number>( // Return type and argument type
  'cart/removeCart',
  async (payload) => {
    await axios.delete(`${API_URL}/${payload}`);
    return payload;
  }
);

// 5. Explicitly type itemPlus
export const itemPlus = createAsyncThunk<CartItem[], CartItem>(
  'cart/itemPlus',
  async (payload: CartItem) => {
    const { data: user } = await axios.get<UserData>(API_URL);
    const updatedCart = user.cart.map((item) =>
      item.id === payload.id && payload.sizes === payload.sizes && payload.colors === payload.colors
        ? { ...item, count: item.count + 1 }
        : item
    );

    const response = await axios.patch<UserData>(API_URL, { cart: updatedCart });
    return response.data.cart;
  }
);

// 6. Explicitly type itemMinus
export const itemMinus = createAsyncThunk<CartItem[], CartItem>(
  'cart/itemMinus',
  async (payload: CartItem) => {
    const { data: user } = await axios.get<UserData>(API_URL);
    const updatedCart = user.cart.map((item) =>
      item.id === payload.id && payload.sizes === payload.sizes && payload.colors === payload.colors && item.count > 1
        ? { ...item, count: item.count - 1 }
        : item
    );

    const response = await axios.patch<UserData>(API_URL, { cart: updatedCart });
    return response.data.cart;
  }
);

export const cartSlice = createSlice({
  name: "cartSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCart.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCart.fulfilled, (state, action: PayloadAction<CartItem[]>) => {
        state.status = 'success';
        state.cart = action.payload;
      })
      .addCase(fetchCart.rejected, (state) => {
        state.status = 'failed';
      })
      .addCase(addCart.fulfilled, (state, action: PayloadAction<CartItem[]>) => {
        state.status = 'success';
        state.cart = action.payload;
      })
      .addCase(removeCart.fulfilled, (state, action: PayloadAction<number>) => {
        state.status = 'success';
        state.cart = state.cart.filter(item => item.id !== action.payload);
      })
      .addCase(itemPlus.fulfilled, (state, action: PayloadAction<CartItem[]>) => {
        state.status = 'success';
        state.cart = action.payload;
      })
      .addCase(itemMinus.fulfilled, (state, action: PayloadAction<CartItem[]>) => {
        state.status = 'success';
        state.cart = action.payload;
      });
  },
});

export default cartSlice.reducer;