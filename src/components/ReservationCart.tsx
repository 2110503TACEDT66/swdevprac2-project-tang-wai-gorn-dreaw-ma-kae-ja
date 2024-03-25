'use client'
import { removeReservation } from "@/redux/features/cartSlice"
import { useAppSelector, AppDispatch } from "@/redux/store"
import { useDispatch } from "react-redux"

export default function ReservationCart(){

    const dentistItems = useAppSelector((state) => state.cartSlice.dentistItems);
    const dispatch = useDispatch<AppDispatch>();

    return(
        <>
        {
            dentistItems.map((reservationItem) => (
                <div className="bg-slate-200 rounded px-5  mx-5 py-2 my-2">
                    <div className="text-xl">{reservationItem.user}</div>
                    <div className="text-sm">Appointment Date: {reservationItem.apptDate}</div>
                    <div className="text-sm">Dentist: {reservationItem.dentist}</div>
                    <button className="block rounded-md bg-sky-600 hover:bg-indigo-600 px-3 py-2 text-white shadow-sm" onClick={() => dispatch(removeReservation(reservationItem))}>Remove from Cart</button>
                </div>
            ))
        }
        </>
    )
}