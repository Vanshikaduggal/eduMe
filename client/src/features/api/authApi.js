import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"
import { userLoggedIn, userLoggedOut } from "../authSlice"

const USER_API="http://localhost:8080/api/v1/user/" //Common URL of points

export const authApi = createApi({
    reducerPath:"authApi",
    baseQuery:fetchBaseQuery({
        baseUrl:USER_API,  // point where it is running
        credentials:'include'
    }),
    endpoints: (builder) =>({
        //when we want to post the data then we use mutation
        registerUser:builder.mutation ({
            query:(inputData) =>({
                url:"register", //This url will get attached at end of above URL 
                method:"POST",
                body:inputData
            })
        }),
        loginUser: builder.mutation({
            query: (inputData) => ({
                url: "login",
                method: "POST",
                body: inputData,
            }),
            async onQueryStarted(_, { queryFulFilled, dispatch }) {
                try {
                    const result = await queryFulFilled;
                    if (result?.data?.user) {
                        dispatch(userLoggedIn({ user: result.data.user }));
                    }
                } catch (error) {
                    console.error("Login error:", error);
                }
            },
        }),
        logoutUser : builder.mutation({
            query:() =>({
                url:"logout",
                method:"GET"
            }),
            async onQueryStarted(_, { queryFulFilled, dispatch }) {
                try {
                    if (result?.data?.user) {
                        dispatch(userLoggedOut());
                    }
                } catch (error) {
                    console.error("Login error:", error);
                }
            },
        }),
        loadUser: builder.query({
            query: () => ({
                url: "profile",
                method: "GET",
            }),
            async onQueryStarted(_, { queryFulFilled, dispatch }) {
                try {
                    const result = await queryFulFilled;
                    if (result?.data?.user) {
                        dispatch(userLoggedIn({ user: result.data.user }));
                    }
                } catch (error) {
                    console.error("Load user error:", error);
                }
            },
        }),  
        updateUser: builder.mutation({
            query:(formData) => ({
                url :"profile/update",
                method:"PUT",
                body:formData,
                credentials:"include"
            })
        })      
    })
});
export const {
    useRegisterUserMutation,
    useLoginUserMutation,
    useLoadUserQuery,
    useUpdateUserMutation,
    useLogoutUserMutation
} = authApi;