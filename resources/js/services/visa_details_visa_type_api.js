import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
// Fetch CSRF token from meta tag
const csrfToken = document.head.querySelector('meta[name="csrf-token"]').content;

export const visa_details_visa_type_api = createApi({
    reducerPath: 'visa_details_visa_type_api',
    baseQuery: fetchBaseQuery({
        baseUrl: '/api/visa-details-visa-type',
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
    tagTypes: ["VisaDetailsVisaType"],
    endpoints: (builder) => ({
        getVisaDetailsVisaTypeList:builder.query({
            query:(id)=>({
                url:`all/${id}`,
                method:"GET"
            }),
            providesTags:["VisaDetailsVisaType"]
        }),
        getVisaDetailsVisaTypeDetails:builder.query({
            query:(id)=>({
                url:`/details/${id}`,
                method:"GET"
            }),
            providesTags:["VisaDetailsVisaType"]
        }),
        createVisaDetailsVisaType:builder.mutation({
            query:(data)=>({
                url:"/create",
                method:"POST",
                body:data
            }),
            invalidatesTags:["VisaDetailsVisaType"]
        }),
        updateVisaDetailsVisaType:builder.mutation({
            query:({id,...data})=>({
                url:`/update/${id}`,
                method:"PUT",
                body:data
            }),
            invalidatesTags:["VisaDetailsVisaType"]
        }),
        deleteVisaDetailsVisaType:builder.mutation({
            query:(id)=>({
                url:`/delete/${id}`,
                method:"DELETE"
            }),
            invalidatesTags:["VisaDetailsVisaType"]
        })
    }),
});


export const {


    useGetVisaDetailsVisaTypeListQuery,
    useGetVisaDetailsVisaTypeDetailsQuery,
    useCreateVisaDetailsVisaTypeMutation,
    useUpdateVisaDetailsVisaTypeMutation,
    useDeleteVisaDetailsVisaTypeMutation



} = visa_details_visa_type_api;
