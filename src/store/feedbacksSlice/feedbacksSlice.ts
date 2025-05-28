import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "http://localhost:5000/feedbacksDB";

// 1. Определите интерфейс для отзыва (Feedback)
interface Feedback {
  id?: number; // Предположим, ID может быть необязательным при добавлении
  [key: string]: any; //  Укажите точные типы свойств feedback, заменив any
}

// 2. Определите интерфейс для состояния (FeedbacksState)
interface FeedbacksState {
  feedbacks: Feedback[];
  status: 'idle' | 'loading' | 'success' | 'failed';
  error: string | null; // Добавлено для обработки ошибок
}

const initialState: FeedbacksState = {
  feedbacks: [],
  status: 'idle',
  error: null, // Инициализируем error в null
};


export const fetchFeedbacks = createAsyncThunk(
  'feedbacks/fetchFeedbacks',
  async () => {
      const response = await axios.get(API_URL);
      return response.data
    } 
);

export const addFeedback = createAsyncThunk<Feedback, Omit<Feedback, 'id'>>(
  'feedbacks/addFeedback',
  async (feedback) => {
    try {
      const response = await axios.post<Feedback>(API_URL, feedback); // Укажите тип для axios.post
      return response.data;
    } catch (error: any) {
       // Явное приведение типа error к any
      throw new Error(error.message); // Пробрасываем ошибку для обработки в rejected
    }
  }
);

const feedbacksSlice = createSlice({
  name: 'feedbacks',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchFeedbacks.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchFeedbacks.fulfilled, (state, action: PayloadAction<Feedback[]>) => {
        state.status = 'success';
        state.feedbacks = action.payload;
        state.error = null; // Сбросить ошибку при успешном получении
      })
      .addCase(fetchFeedbacks.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Failed to fetch feedbacks'; // Сохраняем сообщение об ошибке
      })
      .addCase(addFeedback.pending, (state) => {
        state.status = 'loading'; // Обработка состояния загрузки при добавлении
      })
      .addCase(addFeedback.fulfilled, (state, action: PayloadAction<Feedback>) => {
        state.status = 'success';
        state.feedbacks.push(action.payload);
        state.error = null; // Сбросить ошибку при успешном добавлении
      })
      .addCase(addFeedback.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Failed to add feedback'; // Сохраняем сообщение об ошибке
      });
  },
});

export default feedbacksSlice.reducer;