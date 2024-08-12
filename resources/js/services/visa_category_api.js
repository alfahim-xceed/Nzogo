import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
// Fetch CSRF token from meta tag
const csrfToken = document.head.querySelector('meta[name="csrf-token"]').content;

export const visa_category_api = createApi({
    reducerPath: 'visa_category_api',
    baseQuery: fetchBaseQuery({
        baseUrl: '/api/visa-category',
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
    tagTypes: ["VisaCategory"],
    endpoints: (builder) => ({
        getVisaCategoryListList:builder.query({
            query:()=>({
                url:"/all",
                method:"GET"
            }),
            providesTags:["VisaCategory"]
        }),
        getVisaCategoryDetails:builder.query({
            query:(id)=>({
                url:`/details/${id}`,
                method:"GET"
            }),
            providesTags:["VisaCategory"]
        }),
        createVisaCategory:builder.mutation({
            query:(data)=>({
                url:"/create",
                method:"POST",
                body:data
            }),
            invalidatesTags:["VisaCategory"]
        }),
        updateVisaCategory:builder.mutation({
            query:({id,...data})=>({
                url:`/update/${id}`,
                method:"PUT",
                body:data
            }),
            invalidatesTags:["VisaCategory"]
        }),
        deleteVisaCategory:builder.mutation({
            query:(id)=>({
                url:`/delete/${id}`,
                method:"DELETE"
            }),
            invalidatesTags:["VisaCategory"]
        })
    }),
});

export const {
    useGetVisaCategoryListListQuery,
    useGetVisaCategoryDetailsQuery,
    useCreateVisaCategoryMutation,
    useUpdateVisaCategoryMutation,
    useDeleteVisaCategoryMutation



} = visa_category_api;
