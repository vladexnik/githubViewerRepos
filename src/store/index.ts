import { configureStore } from "@reduxjs/toolkit"
import { apiSlice } from "./github/github.api"
import { setupListeners } from "@reduxjs/toolkit/query";

export const store =configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer
    },
    middleware:(getDefaultMiddleWare)=>
        getDefaultMiddleWare().concat(apiSlice.middleware)
})

setupListeners(store.dispatch);