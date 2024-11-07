import { createSlice } from "@reduxjs/toolkit";

export const chatStatus = createSlice({
  name: "ChatStatus",
  initialState: [],
  reducers: {
    addMessage: (state, action) => {
      state.push(action.payload);
    },
    updateBotLastMessage: (state, action) => {
      const lastMessage = state[state.length - 1];
      if (lastMessage) {
        state[state.length - 1] = {
          ...lastMessage,
          ...action.payload,
        };
      }
    },
    reset: (state) => {
      return [];
    },
  },
});

export const { addMessage, updateBotLastMessage, reset } = chatStatus.actions;

export default chatStatus.reducer;
