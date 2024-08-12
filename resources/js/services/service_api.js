import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
// Fetch CSRF token from meta tag
const csrfToken = document.head.querySelector('meta[name="csrf-token"]').content;

export const service_api = createApi({
    reducerPath: 'service_api',
    baseQuery: fetchBaseQuery({
        baseUrl: '/api/service',
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
    tagTypes: ["Service"],
    endpoints: (builder) => ({
        getServiceList:builder.query({
            query:()=>({
                url:"/all",
                method:"GET"
            }),
            providesTags:["Service"]
        }),
        getServiceDetails:builder.query({
            query:(id)=>({
                url:`/details/${id}`,
                method:"GET"
            }),
            providesTags:["Service"]
        }),
        createService:builder.mutation({
            query:(data)=>({
                url:"/create",
                method:"POST",
                body:data
            }),
            invalidatesTags:["Service"]
        }),
        updateService:builder.mutation({
            query:({id,...data})=>({
                url:`/update/${id}`,
                method:"PUT",
                body:data
            }),
            invalidatesTags:["Service"]
        }),
        deleteService:builder.mutation({
            query:(id)=>({
                url:`/delete/${id}`,
                method:"DELETE"
            }),
            invalidatesTags:["Service"]
        })
    }),
});


export const {


    useGetServiceListQuery,
    useGetServiceDetailsQuery,
    useCreateServiceMutation,
    useUpdateServiceMutation,
    useDeleteServiceMutation



} = service_api;
