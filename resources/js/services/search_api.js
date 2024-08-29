import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
// Fetch CSRF token from meta tag
const csrfToken = document.head.querySelector('meta[name="csrf-token"]').content;

export const search_api = createApi({
    reducerPath: 'search_api',
    baseQuery: fetchBaseQuery({
        baseUrl: '/api/search',
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
    tagTypes: ["Search"],
    endpoints: (builder) => ({
        getSearchResult:builder.query({
            query:({travelling_to_id,visa_category_id})=>({
                url:`/${travelling_to_id}/${visa_category_id}`,
                method:"GET"
            }),
            providesTags:["Country"]
        }),

    }),
});

export const {

    useGetSearchResultQuery


} = search_api;
