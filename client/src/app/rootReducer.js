import { combineReducers } from '@reduxjs/toolkit'
import authReducer from '../features/authSlice'
import { authApi } from '@/features/api/authApi'

const rootReducer = combineReducers({ // TO ADD MULTIPLE API WE USE COMBINEREDUCER
    [authApi.reducerPath]:authApi.reducer,
    auth:authReducer
});

export default rootReducer;