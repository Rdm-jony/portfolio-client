// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const baseApi = createApi({
    reducerPath: 'baseApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://portfolio-server-five-ashy.vercel.app' }),
    endpoints: (builder) => ({
        getProjects: builder.query({
            query: () => `/projects`,
        }),
        getProjectById:builder.query({
            query:(projectId)=>`/project/${projectId}`
        }),
        postUserMesssage:builder.mutation({
            query:(contactInfo)=>({
                url:'/contact',
                method:'POST',
                body:contactInfo
            })
        })
}),
})


export const { useGetProjectsQuery,useGetProjectByIdQuery,usePostUserMesssageMutation } = baseApi