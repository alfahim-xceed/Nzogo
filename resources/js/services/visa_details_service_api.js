import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
// Fetch CSRF token from meta tag
const csrfToken = document.head.querySelector('meta[name="csrf-token"]').content;

export const visa_details_service_api = createApi({
    reducerPath: 'visa_details_service_api',
    baseQuery: fetchBaseQuery({
        baseUrl: '/api/visa-details-service',
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
    tagTypes: ["VisaDetailsService"],
    endpoints: (builder) => ({
        getVisaDetailsServiceList:builder.query({
            query:(id)=>({
                url:`/all/${id}`,
                method:"GET"
            }),
            providesTags:["VisaDetailsService"]
        }),
        getVisaDetailsServiceDetails:builder.query({
            query:(id)=>({
                url:`/details/${id}`,
                method:"GET"
            }),
            providesTags:["VisaDetailsService"]
        }),
        createVisaDetailsService:builder.mutation({
            query:(data)=>({
                url:"/create",
                method:"POST",
                body:data
            }),
            invalidatesTags:["VisaDetailsService"]
        }),
        updateVisaDetailsService:builder.mutation({
            query:({id,...data})=>({
                url:`/update/${id}`,
                method:"PUT",
                body:data
            }),
            invalidatesTags:["VisaDetailsService"]
        }),
        deleteVisaDetailsService:builder.mutation({
            query:(id)=>({
                url:`/delete/${id}`,
                method:"DELETE"
            }),
            invalidatesTags:["VisaDetailsService"]
        })
    }),
});


export const {


    useGetVisaDetailsServiceListQuery,
    useGetVisaDetailsServiceDetailsQuery,
    useCreateVisaDetailsServiceMutation,
    useUpdateVisaDetailsServiceMutation,
    useDeleteVisaDetailsServiceMutation



} = visa_details_service_api;
