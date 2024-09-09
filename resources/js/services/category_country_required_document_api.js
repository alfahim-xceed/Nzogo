import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
// Fetch CSRF token from meta tag
const csrfToken = document.head.querySelector('meta[name="csrf-token"]').content;

export const category_country_required_document_api = createApi({
    reducerPath: 'category_country_required_document_api',
    baseQuery: fetchBaseQuery({
        baseUrl: '/api/category-country-required-documents',
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
    tagTypes: ["CategoryCountryRequiredDocument"],
    endpoints: (builder) => ({
        getCategoryCountryRequiredDocumentList:builder.query({
            query:()=>({
                url:"/all",
                method:"GET"
            }),
            providesTags:["CategoryCountryRequiredDocument"]
        }),
        getCategoryCountryRequiredDocumentDetails:builder.query({
            query:(id)=>({
                url:`/details/${id}`,
                method:"GET"
            }),
            providesTags:["CategoryCountryRequiredDocument"]
        }),
        getCategoryCountryRequiredDocumentListByCountryId:builder.query({
            query:(id)=>({
                url:`/all/${id}`,
                method:"GET"
            }),
            providesTags:["CategoryCountryRequiredDocument"]
        }),
        getCategoryCountryRequiredDocumentListByCountryCategoryId:builder.query({
            query:({country_id,category_id})=>({
                url:`/all/${country_id}/${category_id}`,
                method:"GET"
            }),
            providesTags:["CategoryCountryRequiredDocument"]
        }),
        createCategoryCountryRequiredDocument:builder.mutation({
            query:(data)=>({
                url:"/create",
                method:"POST",
                body:data
            }),
            invalidatesTags:["CategoryCountryRequiredDocument"]
        }),
        updateCategoryCountryRequiredDocument:builder.mutation({
            query:({id,...data})=>({
                url:`/update/${id}`,
                method:"PUT",
                body:data
            }),
            invalidatesTags:["CategoryCountryRequiredDocument"]
        }),
        deleteCategoryCountryRequiredDocument:builder.mutation({
            query:(id)=>({
                url:`/delete/${id}`,
                method:"DELETE"
            }),
            invalidatesTags:["CategoryCountryRequiredDocument"]
        })
    }),
});

export const {

    useGetCategoryCountryRequiredDocumentListQuery,
    useGetCategoryCountryRequiredDocumentDetailsQuery,
    useGetCategoryCountryRequiredDocumentListByCountryIdQuery,
    useGetCategoryCountryRequiredDocumentListByCountryCategoryIdQuery,
    useCreateCategoryCountryRequiredDocumentMutation,
    useUpdateCategoryCountryRequiredDocumentMutation,
    useDeleteCategoryCountryRequiredDocumentMutation


} = category_country_required_document_api;
