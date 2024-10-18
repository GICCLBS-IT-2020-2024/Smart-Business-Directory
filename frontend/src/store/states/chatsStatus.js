import { createSlice } from "@reduxjs/toolkit";

export const chatStatus = createSlice({
  name: "ChatStatus",
  initialState: [],
  reducers: {
    addMessage: (state, action) => {
      state.push(action.payload);
    },
    updateBotLastMessage: (state, action) => {
      const lastMessage = state[state.length - 1]; // Access the last message
      if (lastMessage) {
        // Update the last message immutably
        state[state.length - 1] = { ...lastMessage, ...action.payload };
      }
    },
    reset: (state) => {
      state = [];
    },
  },
});

export const { addMessage, updateBotLastMessage, reset } = chatStatus.actions;

export default chatStatus.reducer;
