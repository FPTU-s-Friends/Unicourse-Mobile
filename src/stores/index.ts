import { configureStore, Tuple } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import reduxLogger from "redux-logger";

const store = configureStore({
  reducer: {},
  middleware: () => new Tuple(reduxLogger),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export default store;
