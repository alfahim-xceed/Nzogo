import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
// Fetch CSRF token from meta tag
const csrfToken = document.head.querySelector('meta[name="csrf-token"]').content;

export const visa_detailis_api = createApi({
    reducerPath: 'visa_detailis_api',
    baseQuery: fetchBaseQuery({
        baseUrl: '/api/visa-details',
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
    tagTypes: ["VisaDetails"],
    endpoints: (builder) => ({
        getVisaDetailsList:builder.query({
            query:()=>({
                url:"/all",
                method:"GET"
            }),
            providesTags:["VisaDetails"]
        }),
        getVisaDetailsDetails:builder.query({
            query:(id)=>({
                url:`/details/${id}`,
                method:"GET"
            }),
            providesTags:["VisaDetails"]
        }),
        createVisaDetails:builder.mutation({
            query:(data)=>({
                url:"/create",
                method:"POST",
                body:data
            }),
            invalidatesTags:["VisaDetails"]
        }),
        updateVisaDetails:builder.mutation({
            query:({id,...data})=>({
                url:`/update/${id}`,
                method:"PUT",
                body:data
            }),
            invalidatesTags:["VisaDetails"]
        }),
        deleteVisaDetails:builder.mutation({
            query:(id)=>({
                url:`/delete/${id}`,
                method:"DELETE"
            }),
            invalidatesTags:["VisaDetails"]
        })
    }),
});


export const {


    useGetVisaDetailsListQuery,
    useGetVisaDetailsDetailsQuery,
    useCreateVisaDetailsMutation,
    useUpdateVisaDetailsMutation,
    useDeleteVisaDetailsMutation



} = visa_detailis_api;
