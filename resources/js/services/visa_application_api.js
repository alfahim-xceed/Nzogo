import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
// Fetch CSRF token from meta tag
const csrfToken = document.head.querySelector('meta[name="csrf-token"]').content;

export const visa_application_api = createApi({
    reducerPath: 'visa_application_api',
    baseQuery: fetchBaseQuery({
        baseUrl: '/api/visa-application',
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
    tagTypes: ["VisaApplication"],
    endpoints: (builder) => ({
        getVisaApplicationList:builder.query({
            query:()=>({
                url:"/all",
                method:"GET"
            }),
            providesTags:["VisaApplication"]
        }),

        createVisaApplication:builder.mutation({
            query:(data)=>({
                url:"/create",
                method:"POST",
                body:data
            }),
            invalidatesTags:["VisaApplication"]
        }),
        deleteVisaApplication:builder.mutation({
            query:(id)=>({
                url:`/delete/${id}`,
                method:"DELETE"
            }),
            invalidatesTags:["VisaApplication"]
        })
    }),
});

export const {

    useGetVisaApplicationListQuery,
    useCreateVisaApplicationMutation,
    useDeleteVisaApplicationMutation


} = visa_application_api;
