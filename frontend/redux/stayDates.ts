import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'
import moment from 'moment'

// Define a type for the slice state



interface Dates {
    startDate: string
    endDate: string
}

interface PayloadActionCustom {
    date: string
    field: string
}

// Define the initial state using that type
const initialState: Dates = {
    startDate: moment().format("YYYY-MM-DD"),
    endDate: moment().format("YYYY-MM-DD"),
}

export const dates = createSlice({
    name: 'stayDates',
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


// Other code such as selectors can use the imported `RootState` type
export const datesState = (state: RootState) => state

export default dates.reducer