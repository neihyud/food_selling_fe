import { configureStore as configureStoreRedux } from "@reduxjs/toolkit"
// import thunk from 'redux-thunk';
import { rootReducer } from "../reducer/RootReducer.js";

export default function configureStore() {
  return configureStoreRedux(
    {
      reducer: rootReducer,
      // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
    }
  );
}
