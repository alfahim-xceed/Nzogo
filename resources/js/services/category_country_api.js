import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
// Fetch CSRF token from meta tag
const csrfToken = document.head.querySelector('meta[name="csrf-token"]').content;

export const category_country_api = createApi({
    reducerPath: 'category_country_api',
    baseQuery: fetchBaseQuery({
        baseUrl: '/api/category-country',
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
    tagTypes: ["CategoryCountry"],
    endpoints: (builder) => ({
        getCategoryCountryList:builder.query({
            query:({travelling_to_id})=>({
                url:`/all?country_id=${travelling_to_id}`,
                method:"GET"
            }),
            providesTags:["CategoryCountry"]
        }),
        getCategoryCountryDetails:builder.query({
            query:(id)=>({
                url:`/details/${id}`,
                method:"GET"
            }),
            providesTags:["CategoryCountry"]
        }),
        createCategoryCountry:builder.mutation({
            query:(data)=>({
                url:"/create",
                method:"POST",
                body:data
            }),
            invalidatesTags:["CategoryCountry"]
        }),
        updateCategoryCountry:builder.mutation({
            query:({id,...data})=>({
                url:`/update/${id}`,
                method:"PUT",
                body:data
            }),
            invalidatesTags:["CategoryCountry"]
        }),
        deleteCategoryCountry:builder.mutation({
            query:(id)=>({
                url:`/delete/${id}`,
                method:"DELETE"
            }),
            invalidatesTags:["CategoryCountry"]
        })
    }),
});

export const {

    useGetCategoryCountryListQuery,
    useGetCategoryCountryDetailsQuery,
    useCreateCategoryCountryMutation,
    useUpdateCategoryCountryMutation,
    useDeleteCategoryCountryMutation


} = category_country_api;
