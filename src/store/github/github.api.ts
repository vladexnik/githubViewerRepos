import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IRepo, IUser, ServerResponse } from "../../models/models";

export const apiSlice=createApi({
    reducerPath: 'github/api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://api.github.com/'
    }),
    refetchOnFocus: true,
    endpoints: builder =>({
        // query <что возвр сервер, что принимаем>
        searchUsers: builder.query<IUser[], string>({
            query: (search: string)=> ({ 
                url: `search/users`,
                params: {
                    q: search,
                    per_page: 10
                }
            }), 
            transformResponse: (response: ServerResponse<IUser>) => response.items
        }),
        getUserRepos: builder.query<IRepo[], string> ({
            query: (username: string)=>({
                url: `users/${username}/repos`
            })
        })
    })
})

export const { useSearchUsersQuery, useLazyGetUserReposQuery }=apiSlice
// Lazy - делаем хук когда захотим