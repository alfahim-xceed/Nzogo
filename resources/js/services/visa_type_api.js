import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
// Fetch CSRF token from meta tag
const csrfToken = document.head.querySelector('meta[name="csrf-token"]').content;

export const visa_type_api = createApi({
    reducerPath: 'visa_type_api',
    baseQuery: fetchBaseQuery({
        baseUrl: '/api/visa-type',
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
    tagTypes: ["VisaType"],
    endpoints: (builder) => ({
        getVisaTypeList:builder.query({
            query:()=>({
                url:"/all",
                method:"GET"
            }),
            providesTags:["VisaType"]
        }),
        getVisaTypeDetails:builder.query({
            query:(id)=>({
                url:`/details/${id}`,
                method:"GET"
            }),
            providesTags:["VisaType"]
        }),
        createVisaType:builder.mutation({
            query:(data)=>({
                url:"/create",
                method:"POST",
                body:data
            }),
            invalidatesTags:["VisaType"]
        }),
        updateVisaType:builder.mutation({
            query:({id,...data})=>({
                url:`/update/${id}`,
                method:"PUT",
                body:data
            }),
            invalidatesTags:["VisaType"]
        }),
        deleteVisaType:builder.mutation({
            query:(id)=>({
                url:`/delete/${id}`,
                method:"DELETE"
            }),
            invalidatesTags:["VisaType"]
        })
    }),
});


export const {


    useGetVisaTypeListQuery,
    useGetVisaTypeDetailsQuery,
    useCreateVisaTypeMutation,
    useUpdateVisaTypeMutation,
    useDeleteVisaTypeMutation



} = visa_type_api;
