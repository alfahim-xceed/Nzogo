import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
// Fetch CSRF token from meta tag
const csrfToken = document.head.querySelector('meta[name="csrf-token"]').content;

export const country_api = createApi({
    reducerPath: 'country_api',
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
    tagTypes: ["Country"],
    endpoints: (builder) => ({
        getCountryList:builder.query({
            query:()=>({
                url:"/country/all",
                method:"GET"
            }),
            providesTags:["Country"]
        }),
        getCountryDetails:builder.query({
            query:(id)=>({
                url:`/country/details/${id}`,
                method:"GET"
            }),
            providesTags:["Country"]
        }),
        createCountry:builder.mutation({
            query:(data)=>({
                url:"/country/create",
                method:"POST",
                body:data
            }),
            invalidatesTags:["Country"]
        }),
        updateCountry:builder.mutation({
            query:({id,...data})=>({
                url:`/country/update/${id}`,
                method:"PUT",
                body:data
            }),
            invalidatesTags:["Country"]
        }),
        deleteCountry:builder.mutation({
            query:(id)=>({
                url:`/country/delete/${id}`,
                method:"DELETE"
            }),
            invalidatesTags:["Country"]
        })
    }),
});

export const {

    useGetCountryListQuery,
    useGetCountryDetailsQuery,
    useCreateCountryMutation,
    useUpdateCountryMutation,
    useDeleteCountryMutation


} = country_api;
