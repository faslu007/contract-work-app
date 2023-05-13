import { configureStore } from '@reduxjs/toolkit'
import customerReducer from '../features/customer/customerReducer'


export const store = configureStore({
  reducer: {
    customer: customerReducer,
  },
})