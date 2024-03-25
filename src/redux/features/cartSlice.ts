import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ReservationItem } from "../../../interfaces";

type CartState = {
    dentistItems: ReservationItem[]
}

const initialState:CartState = { dentistItems:[]}

export const cartSlice = createSlice ({
    name: "cart",
    initialState,
    reducers: {
        addReservation: (state, action:PayloadAction<ReservationItem>) => {
            state.dentistItems.push(action.payload);
        },
        removeReservation: (state, action:PayloadAction<ReservationItem>) => {
            const remainItems = state.dentistItems.filter(obj => {
                return ((obj.apptDate !== action.payload.apptDate)
                 || (obj.user !== action.payload.user)
                 || (obj.dentist !== action.payload.dentist));
            })
            state.dentistItems = remainItems
        }
    }
})

export const { addReservation, removeReservation} = cartSlice.actions
export default cartSlice.reducer