import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
// Fetch CSRF token from meta tag
const csrfToken = document.head.querySelector('meta[name="csrf-token"]').content;

export const embassy_api = createApi({
    reducerPath: 'embassy_api',
    baseQuery: fetchBaseQuery({
        baseUrl: '/api/embassy',
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
    tagTypes: ["Embassy"],
    endpoints: (builder) => ({
        getEmbassyList:builder.query({
            query:()=>({
                url:"/all",
                method:"GET"
            }),
            providesTags:["Embassy"]
        }),
        getEmbassyListByCountryId:builder.query({
            query:(id)=>({
                url:`/country/${id}`,
                method:"GET"
            }),
            providesTags:["Embassy"]
        }),
        getEmbassyDetails:builder.query({
            query:(id)=>({
                url:`/details/${id}`,
                method:"GET"
            }),
            providesTags:["Embassy"]
        }),
        createEmbassy:builder.mutation({
            query:(data)=>({
                url:"/create",
                method:"POST",
                body:data
            }),
            invalidatesTags:["Embassy"]
        }),
        updateEmbassy:builder.mutation({
            query:({id,...data})=>({
                url:`/update/${id}`,
                method:"PUT",
                body:data
            }),
            invalidatesTags:["Embassy"]
        }),
        deleteEmbassy:builder.mutation({
            query:(id)=>({
                url:`/delete/${id}`,
                method:"DELETE"
            }),
            invalidatesTags:["Embassy"]
        })
    }),
});

export const {

    useGetEmbassyListQuery,
    useGetEmbassyListByCountryIdQuery,
    useGetEmbassyDetailsQuery,
    useCreateEmbassyMutation,
    useUpdateEmbassyMutation,
    useDeleteEmbassyMutation


} = embassy_api;
