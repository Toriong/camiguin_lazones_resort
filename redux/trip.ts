import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'
import moment from 'moment'
import { Dates, Trip } from 'globalInterfaces/interfaces'

// Define a type for the slice state





interface PayloadActionCustom {
    data: string | number
    field: string
}

// Define the initial state using that type
const initialState: Trip = {
    startDate: moment().format("MMMM DD, YYYY"),
    endDate: moment().format("MMMM DD, YYYY"),
    adultsNum: 0,
    childrenNum: 0,
    couponCode: ""   
}

export const trip = createSlice({
    name: 'trip',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        // Use the PayloadAction type to declare the contents of `action.payload`

        // why is that setTrip doesn't update the Redux state
        setTrip: (state, action: PayloadAction<PayloadActionCustom>) => {
            const { data, field } = action.payload;
            state = { ...state, [field]: data }
        },
        updateCoupon: (state, action: PayloadAction<string>) => {
            state.couponCode = action.payload
        }
    },
})

export const { setTrip, updateCoupon } = trip.actions

export const getTripInfo = (state:Trip) => state


export default trip.reducer