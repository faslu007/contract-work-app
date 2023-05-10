import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import authService from './authService'

const user = JSON.parse(localStorage.getItem('user'))


const initialState = {
    user: user ? user : null,
    loginInput: {
        phone: "",
        pin: ""
    },
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: '',
}


