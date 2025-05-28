import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "http://localhost:5000/users/1";

// 1. Define the CartItem interface
interface CartItem {
  id: number;
  name: string; // Add name or other relevant properties
  size: string;
  color: string;
  count: number;
  [key: string]: any; // Allow other properties if needed
}

// 2. Define the CartState interface
interface CartState {
  cart: CartItem[];
  status: 'idle' | 'loading' | 'success' | 'failed';
  error: string | null;
}

const initialState: CartState = {
  cart: [],
  status: 'idle',
  error: null,
};

// 3. Refactor and type createAsyncThunk actions
export const fetchCart = createAsyncThunk<CartItem[], void>(
  'cart/fetchCart',
  async () => {
    try {
      const response = await axios.get<{ cart: CartItem[] }>(API_URL);
      return response.data.cart;
    } catch (error: any) {
      throw new Error(error.message || "Failed to fetch cart");
    }
  }
);

export const addCart = createAsyncThunk<CartItem[], CartItem>( // Return CartItem[]
  'cart/addCart',
  async (payload) => {
    try {
      const { data: user } = await axios.get<{ cart: CartItem[] }>(API_URL);
      const findItem = user.cart.find(
        (item) =>
          item.id === payload.id &&
          item.size === payload.size &&
          item.color === payload.color
      );

      const updatedCart = findItem
        ? user.cart.map((item) =>
            item.id === payload.id &&
            item.size === payload.size &&
            item.color === payload.color
              ? { ...item, count: item.count + payload.count }
              : item
          )
        : [...user.cart, payload];

      const response = await axios.patch<{ cart: CartItem[] }>(API_URL, { cart: updatedCart });
      return response.data.cart; // Return the updated cart
    } catch (error: any) {
      throw new Error(error.message || "Failed to add item to cart");
    }
  }
);

export const removeCart = createAsyncThunk<number, {id:number}>( // Payload is the item ID
  'cart/removeCart',
  async (payload) => {
    try {
       const { data: user } = await axios.get<{ cart: CartItem[] }>(API_URL);
        const updatedCart = user.cart.filter((item) => item.id !== payload.id);
      await axios.patch(API_URL, { cart: updatedCart });
      return payload.id; // Return the removed item ID
    } catch (error: any) {
      throw new Error(error.message || "Failed to remove item from cart");
    }
  }
);

export const itemPlus = createAsyncThunk<CartItem[], {id:number; size:string; color:string}>( // Use an object for payload
  'cart/itemPlus',
  async (payload) => {
    try {
      const { data: user } = await axios.get<{ cart: CartItem[] }>(API_URL);
      const updatedCart = user.cart.map((item) =>
        item.id === payload.id && item.size === payload.size && item.color === payload.color
          ? { ...item, count: item.count + 1 }
          : item
      );

      const response = await axios.patch<{ cart: CartItem[] }>(API_URL, { cart: updatedCart });
      return response.data.cart;
    } catch (error: any) {
      throw new Error(error.message || "Failed to increase item count");
    }
  }
);

export const itemMinus = createAsyncThunk<CartItem[], {id:number; size:string; color:string}>(  // Use an object for payload
  'cart/itemMinus',
  async (payload) => {
    try {
      const { data: user } = await axios.get<{ cart: CartItem[] }>(API_URL);
      const updatedCart = user.cart.map((item) =>
        item.id === payload.id && item.size === payload.size && item.color === payload.color && item.count > 1
          ? { ...item, count: item.count - 1 }
          : item
      );

      const response = await axios.patch<{ cart: CartItem[] }>(API_URL, { cart: updatedCart });
      return response.data.cart;
    } catch (error: any) {
      throw new Error(error.message || "Failed to decrease item count");
    }
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
        state.error = null;
      })
      .addCase(fetchCart.fulfilled, (state, action: PayloadAction<CartItem[]>) => {
        state.status = 'success';
        state.cart = action.payload;
      })
      .addCase(fetchCart.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || "Failed to fetch cart";
      })
      .addCase(addCart.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(addCart.fulfilled, (state, action: PayloadAction<CartItem[]>) => {
        state.status = 'success';
        state.cart = action.payload;
      })
      .addCase(addCart.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || "Failed to add item to cart";
      })
      .addCase(removeCart.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(removeCart.fulfilled, (state, action: PayloadAction<number>) => {
        state.status = 'success';
        state.cart = state.cart.filter(item => item.id !== action.payload);
      })
      .addCase(removeCart.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || "Failed to remove item from cart";
      })
      .addCase(itemPlus.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(itemPlus.fulfilled, (state, action: PayloadAction<CartItem[]>) => {
        state.status = 'success';
        state.cart = action.payload;
      })
      .addCase(itemPlus.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || "Failed to increase item count";
      })
      .addCase(itemMinus.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(itemMinus.fulfilled, (state, action: PayloadAction<CartItem[]>) => {
        state.status = 'success';
        state.cart = action.payload;
      })
      .addCase(itemMinus.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || "Failed to decrease item count";
      });
  },
});

export default cartSlice.reducer;