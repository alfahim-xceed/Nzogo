import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
// Fetch CSRF token from meta tag
const csrfToken = document.head.querySelector('meta[name="csrf-token"]').content;

export const appointment_api = createApi({
    reducerPath: 'appointment_api',
    baseQuery: fetchBaseQuery({
        baseUrl: '/api/appointment',
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
    tagTypes: ["Appointment"],
    endpoints: (builder) => ({
        getAppointmentList:builder.query({
            query:()=>({
                url:"/all",
                method:"GET"
            }),
            providesTags:["Appointment"]
        }),
        getAppointmentDetails:builder.query({
            query:(id)=>({
                url:`/details/${id}`,
                method:"GET"
            }),
            providesTags:["Appointment"]
        }),
        createAppointment:builder.mutation({
            query:(data)=>({
                url:"/create",
                method:"POST",
                body:data
            }),
            invalidatesTags:["Appointment"]
        }),
        updateAppointment:builder.mutation({
            query:({id,...data})=>({
                url:`/update/${id}`,
                method:"PUT",
                body:data
            }),
            invalidatesTags:["Appointment"]
        }),
        deleteAppointment:builder.mutation({
            query:(id)=>({
                url:`/delete/${id}`,
                method:"DELETE"
            }),
            invalidatesTags:["Appointment"]
        })
    }),
});

export const {

    useGetAppointmentListQuery,
    useGetAppointmentDetailsQuery,
    useCreateAppointmentMutation,
    useUpdateAppointmentMutation,
    useDeleteAppointmentMutation


} = appointment_api;
