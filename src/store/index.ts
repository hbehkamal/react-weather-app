import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";

import { getWather } from "api";

export const store = configureStore({
  reducer: {
    [getWather.reducerPath]: getWather.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(getWather.middleware),
});

setupListeners(store.dispatch);
