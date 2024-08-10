import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
// Fetch CSRF token from meta tag
const csrfToken = document.head.querySelector('meta[name="csrf-token"]').content;

export const api = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: '/api',
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
    tagTypes:["User","Nid","Passport"],
    endpoints: (builder) => ({
        getExampleData: builder.query({
            query: () => '/example-endpoint',
        }),
        postExampleData: builder.mutation({
            query: (data) => ({
                url: '/example-endpoint',
                method: 'POST',
                body: data,
            }),
        }),
        // Auth
        loginUser: builder.mutation({
            query: (data) => ({
                url: "/auth/login",
                method: "POST",
                body: data
            }),
            invalidatesTags:["User","Nid","Passport"]
        }),
        registerUser: builder.mutation({
            query: (data) => ({
                url: "/auth/register",
                method: "POST",
                body: data
            }),
            invalidatesTags:["User","Nid","Passport"]
        }),
        getUserDetails: builder.query({
            query: (id) => ({
                url: `/auth/details/${id}`
            }),
            providesTags:["User"]
        }),

        getMyProfile: builder.query({
            query: () => ({
                url: "/auth/logged-user-info"
            }),
            providesTags:["User"]
        }),

        updateUserDetails:builder.mutation({
            query:({id,...data})=>({
                url:`auth/update/${id}`,
                method:"PUT",
                body:data
            }),
            invalidatesTags:["User"]
        }),

        updateMyPassword:builder.mutation({
            query:(data)=>({
                url:"/auth/update/my-password",
                method:"PUT",
                body:data
            })
        })
        ,
        logoutUser: builder.mutation({
            query: () => ({
                url: "/auth/logout",
                method: "POST"
            }),
            invalidatesTags:["User","Nid","Passport"]
        }),

        getUserList:builder.query({
            query:()=>({
                url:"/auth/all",
                method:"GET",
            }),
            providesTags:["User"]
        }),

        deleteUser:builder.mutation({
            query:(id)=>({
                url:`/auth/delete/${id}`,
                method:"DELETE",
            }),
            invalidatesTags:["User"]
        }),


        // NID
        getNidDetails:builder.query({
            query:(user_id)=>({
                url:`/nid/details/${user_id}`,
                method:"GET"
            }),
            providesTags:["Nid"]
        }),
        manageNid:builder.mutation({
            query:(data)=>({
                url:"/nid/manage-nid",
                method:"POST",
                body:data
            }),
            invalidatesTags:["Nid"]
        }),

        // Passport
        getPassportDetails:builder.query({
            query:(user_id)=>({
                url:`/passport/details/${user_id}`,
                method:"GET"
            }),
            providesTags:["Passport"]
        }),
        managePassport:builder.mutation({
            query:(data)=>({
                url:"/passport/manage-passport",
                method:"POST",
                body:data
            }),
            invalidatesTags:["Passport"]
        })
    }),
});

export const {
    useGetExampleDataQuery,
    usePostExampleDataMutation,
    useLoginUserMutation,
    useRegisterUserMutation,
    useGetUserDetailsQuery,
    useLogoutUserMutation,
    useUpdateUserDetailsMutation,
    useUpdateMyPasswordMutation,
    useGetUserListQuery,
    useGetMyProfileQuery,
    useDeleteUserMutation,

    useGetNidDetailsQuery,
    useManageNidMutation,


    useGetPassportDetailsQuery,
    useManagePassportMutation


} = api;
