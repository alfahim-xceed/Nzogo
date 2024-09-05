import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
// Fetch CSRF token from meta tag

export const process_step_api = createApi({
    reducerPath: 'process_step_api',
    baseQuery: fetchBaseQuery({
        baseUrl: '/api/process-steps',
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


            return headers;
        },
    }),
    tagTypes: ["ProcessStep"],
    endpoints: (builder) => ({
        getProcessStepList:builder.query({
            query:()=>({
                url:"/all",
                method:"GET"
            }),
            providesTags:["ProcessStep"]
        }),
        getProcessStepListByCountryId:builder.query({
            query:(id)=>({
                url:`/country/${id}`,
                method:"GET"
            }),
            providesTags:["ProcessStep"]
        }),
        getProcessStepDetails:builder.query({
            query:(id)=>({
                url:`/details/${id}`,
                method:"GET"
            }),
            providesTags:["ProcessStep"]
        }),
        createProcessStep:builder.mutation({
            query:(data)=>({
                url:"/create",
                method:"POST",
                body:data
            }),
            invalidatesTags:["ProcessStep"]
        }),
        updateProcessStep:builder.mutation({
            query:({id,...data})=>({
                url:`/update/${id}`,
                method:"PUT",
                body:data
            }),
            invalidatesTags:["ProcessStep"]
        }),
        deleteProcessStep:builder.mutation({
            query:(id)=>({
                url:`/delete/${id}`,
                method:"DELETE"
            }),
            invalidatesTags:["ProcessStep"]
        })
    }),
});

export const {

    useGetProcessStepListQuery,
    useGetProcessStepListByCountryIdQuery,
    useGetProcessStepDetailsQuery,
    useCreateProcessStepMutation,
    useUpdateProcessStepMutation,
    useDeleteProcessStepMutation


} = process_step_api;
