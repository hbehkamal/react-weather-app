import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";

import { getWather, getCities } from "api";

export const store = configureStore({
  reducer: {
    [getWather.reducerPath]: getWather.reducer,
    [getCities.reducerPath]: getCities.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(getWather.middleware)
      .concat(getCities.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
