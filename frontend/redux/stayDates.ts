import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'
import moment from 'moment'
import { Dates, Trip } from 'globalInterfaces/interfaces'

// Define a type for the slice state





interface PayloadActionCustom {
    date: string
    field: string
}

// Define the initial state using that type
const initialState: Trip = {
    startDate: moment().format("YYYY-MM-DD"),
    endDate: moment().format("YYYY-MM-DD"),
    adultsNum: 0,
    childrenNum: 0   
}

export const dates = createSlice({
    name: 'trip',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        // Use the PayloadAction type to declare the contents of `action.payload`
        updateDate: (state: Dates, action: PayloadAction<PayloadActionCustom>) => {
            const { date, field } = action.payload;
            state = { ...state, [field]: date }
        },
    },
})

export const { updateDate } = dates.actions


export default dates.reducer