import { configureStore } from "@reduxjs/toolkit";

export const view = configureStore({
  reducer: {}
})

export type RootState = ReturnType<typeof view.getState>
export type AppDispatch = typeof view.dispatch