import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
// Fetch CSRF token from meta tag
const csrfToken = document.head.querySelector('meta[name="csrf-token"]').content;

export const country_service_api = createApi({
    reducerPath: 'country_service_api',
    baseQuery: fetchBaseQuery({
        baseUrl: '/api/country-service',
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
    tagTypes: ["CountryService"],
    endpoints: (builder) => ({
        getCountryServiceList:builder.query({
            query:()=>({
                url:"/all",
                method:"GET"
            }),
            providesTags:["CountryService"]
        }),
        getCountryServiceListByCountryId:builder.query({
            query:(country_id)=>({
                url:`/all/${country_id}`,
                method:"GET"
            }),
            providesTags:["CountryService"]
        }),
        getCountryServiceListByCountryCategoryId:builder.query({
            query:({country_id,category_id})=>({
                url:`/all/${country_id}/${category_id}`,
                method:"GET"
            }),
            providesTags:["CountryService"]
        }),
        getCountryServiceDetails:builder.query({
            query:(id)=>({
                url:`/details/${id}`,
                method:"GET"
            }),
            providesTags:["CountryService"]
        }),
        createCountryService:builder.mutation({
            query:(data)=>({
                url:"/create",
                method:"POST",
                body:data
            }),
            invalidatesTags:["CountryService"]
        }),
        updateCountryService:builder.mutation({
            query:({id,...data})=>({
                url:`/update/${id}`,
                method:"PUT",
                body:data
            }),
            invalidatesTags:["CountryService"]
        }),
        deleteCountryService:builder.mutation({
            query:(id)=>({
                url:`/delete/${id}`,
                method:"DELETE"
            }),
            invalidatesTags:["CountryService"]
        })
    }),
});

export const {

    useGetCountryServiceListQuery,
    useGetCountryServiceListByCountryIdQuery,
    useGetCountryServiceListByCountryCategoryIdQuery,
    useGetCountryServiceDetailsQuery,
    useCreateCountryServiceMutation,
    useUpdateCountryServiceMutation,
    useDeleteCountryServiceMutation


} = country_service_api;
