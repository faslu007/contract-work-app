import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import service from "./service"


const initialState = {
    isLoading: false,
    isSuccess: false,
    isError: false,
    message: "",
    customer: {

    },
};


export const registerCustomer = createAsyncThunk(
    'customer/register',
    async (data, thunkAPI) => {
        try {
            return await service.registerNewUser(data);
        } catch (error) {
            if (error.response && error.response.data && error.response.data.message) {
                return thunkAPI.rejectWithValue(error.response.data.message);
            } else {
                return thunkAPI.rejectWithValue('An error occurred while registering the customer.');
            }
        }
    }
);

export const customerSlice = createSlice({
    name: "customer",
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(registerCustomer.pending, (state) => {
                state.isLoading = true
            })
            .addCase(registerCustomer.fulfilled, (state, action) => {
                console.log(action)
                state.isLoading = false
                state.isSuccess = true
                state.customer = action.payload
            })
            .addCase(registerCustomer.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
                state.customer = null
            })
    }
})


export const { } = customerSlice.actions
export default customerSlice.reducer


