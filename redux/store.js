import { configureStore } from "@reduxjs/toolkit";
import exampleReducer from "./slices/example";


export default configureStore({
  reducer: {
    example: exampleReducer
  },
});
