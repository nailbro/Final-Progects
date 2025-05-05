import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "http://localhost:5000/feedbacks";

interface Feedback {
  id: number;
  [key: string]: any;
}

const initialState = {
  feedbacks: [] as Feedback[],
  status: 'idle' as 'idle' | 'loading' | 'success' | 'failed',
  error: null as string | null  // Add error state
}

export const fetchFeedbacks = createAsyncThunk(
  'feedbacks/fetchFeedbacks',
  // Add thunkAPI as an argument to the callback function
  async (arg, thunkAPI) => {
    try {
      const response = await axios.get<Feedback[]>(API_URL);
      return response.data;
    } catch (error: any) {
      // Handle errors in the async thunk
      return thunkAPI.rejectWithValue(error.message); // Use rejectWithValue
    }
  }
)

export const addFeedback = createAsyncThunk(
  'feedbacks/addFeedback',
  // Add thunkAPI as an argument here as well
  async (feedback: Omit<Feedback, 'id'>, thunkAPI) => {
    try {
      const response = await axios.post<Feedback>(API_URL, feedback);
      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
)

const feedbacksSlice = createSlice({
  name: 'feedbacks',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchFeedbacks.pending, (state) => {
        state.status = 'loading';
        state.error = null; // Clear any previous error
      })
      .addCase(fetchFeedbacks.fulfilled, (state, action: PayloadAction<Feedback[]>) => {
        state.status = 'success';
        state.feedbacks = action.payload;
        state.error = null;
      })
      .addCase(fetchFeedbacks.rejected, (state, action: PayloadAction<any>) => { // Change the type of action
        state.status = 'failed';
        state.error = action.payload; // Set the error message
        state.feedbacks = []; //clear feedbacks
      })
      .addCase(addFeedback.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(addFeedback.fulfilled, (state, action: PayloadAction<Feedback>) => {
        state.status = 'success';
        state.feedbacks.push(action.payload);
        state.error = null;
      })
       .addCase(addFeedback.rejected, (state, action: PayloadAction<any>) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  }
});

export default feedbacksSlice.reducer;
