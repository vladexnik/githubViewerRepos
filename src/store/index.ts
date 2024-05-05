import { configureStore } from "@reduxjs/toolkit"
import { apiSlice } from "./github/github.api"
import { setupListeners } from "@reduxjs/toolkit/query";
import { githubReducer } from "./github/github.slice";

export const store =configureStore({
    reducer: {
        github: githubReducer,
        [apiSlice.reducerPath]: apiSlice.reducer
    },
    middleware:(getDefaultMiddleWare)=>
        getDefaultMiddleWare().concat(apiSlice.middleware)
})

setupListeners(store.dispatch);

export type RootState= ReturnType<typeof store.getState>;