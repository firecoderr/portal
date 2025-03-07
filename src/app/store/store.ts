import { configureStore } from "@reduxjs/toolkit";
import createFormReducer from "../../features/create-form/createFormSlice";

export const store = configureStore({
  reducer: { createForm: createFormReducer },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
