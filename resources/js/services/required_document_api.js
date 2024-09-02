import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
// Fetch CSRF token from meta tag
const csrfToken = document.head.querySelector('meta[name="csrf-token"]').content;

export const required_document_api = createApi({
    reducerPath: 'required_document_api',
    baseQuery: fetchBaseQuery({
        baseUrl: '/api/required-documents',
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
    tagTypes: ["RequiredDocument"],
    endpoints: (builder) => ({
        getRequiredDocumentList:builder.query({
            query:()=>({
                url:"/all",
                method:"GET"
            }),
            providesTags:["RequiredDocument"]
        }),
        getRequiredDocumentDetails:builder.query({
            query:(id)=>({
                url:`/details/${id}`,
                method:"GET"
            }),
            providesTags:["RequiredDocument"]
        }),
        createRequiredDocument:builder.mutation({
            query:(data)=>({
                url:"/create",
                method:"POST",
                body:data
            }),
            invalidatesTags:["RequiredDocument"]
        }),
        updateRequiredDocument:builder.mutation({
            query:({id,...data})=>({
                url:`/update/${id}`,
                method:"PUT",
                body:data
            }),
            invalidatesTags:["RequiredDocument"]
        }),
        deleteRequiredDocument:builder.mutation({
            query:(id)=>({
                url:`/delete/${id}`,
                method:"DELETE"
            }),
            invalidatesTags:["RequiredDocument"]
        })
    }),
});

export const {

    useGetRequiredDocumentListQuery,
    useGetRequiredDocumentDetailsQuery,
    useCreateRequiredDocumentMutation,
    useUpdateRequiredDocumentMutation,
    useDeleteRequiredDocumentMutation


} = required_document_api;
