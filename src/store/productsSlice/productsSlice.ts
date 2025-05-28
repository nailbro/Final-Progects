import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "http://localhost:5000/productsDB";

// 1. Определите интерфейс для продукта
interface Product {
  id: number; // Предположим, что у продукта есть id
  [key: string]: any; // Добавьте другие свойства продукта, если они есть
}

// 2. Определите интерфейс для состояния
interface ProductsState {
  products: Product[];
  status: 'idle' | 'loading' | 'success' | 'failed';
  error: string | null; // Добавлено для обработки ошибок
}

const initialState: ProductsState = {
  products: [],
  status: 'idle',
  error: null,
};

// 3. Укажите типы в createAsyncThunk
export const fetchProducts = createAsyncThunk<Product[], void>( // Первый дженерик - тип возвращаемых данных
  'products/fetchProducts',
  async () => {
    const response = await axios.get<Product[]>(API_URL); // Укажите тип для axios.get
    return response.data;
  }
);

export const addProduct = createAsyncThunk<Product, any>( // Первый дженерик - тип возвращаемых данных, второй - тип аргумента
  'products/addProduct',
  async (product) => {
    const response = await axios.post<Product>(API_URL, product);  // Укажите тип для axios.post
    return response.data;
  }
);

export const productsSlice = createSlice({
  name: "productsSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      //Получение всех товаров
      .addCase(fetchProducts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProducts.fulfilled, (state, action: PayloadAction<Product[]>) => { // Укажите тип для action
        state.status = 'success';
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => { // Добавлена обработка ошибки
        state.status = 'failed';
        state.error = action.error.message || "Failed to fetch products";
      })
      //Добавление нового товара
      .addCase(addProduct.fulfilled, (state, action: PayloadAction<Product>) => { // Укажите тип для action
        state.products.push(action.payload);
      })
      .addCase(addProduct.rejected, (state, action) => { // Добавлена обработка ошибки
        state.status = 'failed'; 
        state.error = action.error.message || "Failed to add product";
      });
  },
});

export default productsSlice.reducer;