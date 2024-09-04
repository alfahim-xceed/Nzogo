import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
// Fetch CSRF token from meta tag
const csrfToken = document.head.querySelector('meta[name="csrf-token"]').content;

export const visa_api = createApi({
    reducerPath: 'visa_api',
    baseQuery: fetchBaseQuery({
        baseUrl: '/api/visa',
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
    tagTypes: ["Visa"],
    endpoints: (builder) => ({
        getVisaList:builder.query({
            query:()=>({
                url:"/all",
                method:"GET"
            }),
            providesTags:["Visa"]
        }),
        getVisaDetails:builder.query({
            query:(id)=>({
                url:`/details/${id}`,
                method:"GET"
            }),
            providesTags:["Visa"]
        }),
        createVisa:builder.mutation({
            query:(data)=>({
                url:"/create",
                method:"POST",
                body:data
            }),
            invalidatesTags:["Visa"]
        }),
        updateVisa:builder.mutation({
            query:({id,...data})=>({
                url:`/update/${id}`,
                method:"PUT",
                body:data
            }),
            invalidatesTags:["Visa"]
        }),
        deleteVisa:builder.mutation({
            query:(id)=>({
                url:`/delete/${id}`,
                method:"DELETE"
            }),
            invalidatesTags:["Visa"]
        })
    }),
});

export const {

    useGetVisaListQuery,
    useGetVisaDetailsQuery,
    useCreateVisaMutation,
    useUpdateVisaMutation,
    useDeleteVisaMutation


} = visa_api;
