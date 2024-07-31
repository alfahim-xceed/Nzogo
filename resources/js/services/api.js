import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
// Fetch CSRF token from meta tag
const csrfToken = document.head.querySelector('meta[name="csrf-token"]').content;
import { useSelector } from 'react-redux'; // Import useSelector for functional components


export const api = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: '/api',
        prepareHeaders: (headers, { getState }) => {
            // const token = localStorage.getItem("token");
            // Get the token from the Redux state
            const state = getState();
            const token = state.auth.token;
            // getState().auth.token ||
            if (token) {
                headers.set("Authorization", `Bearer ${token}`);
            }
            headers.set("Content-Type", "application/json");
            headers.set('X-CSRF-TOKEN', csrfToken);
            return headers;
        },
    }),
    endpoints: (builder) => ({
        getExampleData: builder.query({
            query: () => '/example-endpoint',
        }),
        postExampleData: builder.mutation({
            query: (data) => ({
                url: '/example-endpoint',
                method: 'POST',
                body: data,
            }),
        }),
        loginUser: builder.mutation({
            query: (data) => ({
                url: "/auth/login",
                method: "POST",
                body: data
            })
        }),
        registerUser: builder.mutation({
            query: (data) => ({
                url: "/auth/register",
                method: "POST",
                body: data
            })
        }),
        getUserDetails: builder.query({
            query: () => ({
                url: "/auth/logged-user-info"
            })
        }),

        logoutUser: builder.mutation({
            query: () => ({
                url: "/auth/logout",
                method: "POST"
            })
        })
    }),
});

export const { useGetExampleDataQuery, usePostExampleDataMutation, useLoginUserMutation, useRegisterUserMutation, useGetUserDetailsQuery, useLogoutUserMutation } = api;
