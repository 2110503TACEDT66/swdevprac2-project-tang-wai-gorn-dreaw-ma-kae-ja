import { removeReservation } from "@/redux/features/cartSlice"
import { useAppSelector, AppDispatch } from "@/redux/store"
import { useDispatch } from "react-redux"
import { BookingJson } from "../../interfaces";
import deleteBooking from "@/libs/deleteBooking";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export default async function ReservationCart({bookingJson} : {bookingJson:BookingJson}){
    const bookingJsonReady = await bookingJson;
    const session = await getServerSession(authOptions);
    return(
        <>
        {
            bookingJsonReady.data.map((reservationItem) => (
                <div className="bg-slate-200 rounded px-5  mx-5 py-2 my-2">
                    <div className="text-xl">{reservationItem.user}</div>
                    <div className="text-sm">Appointment Date: {reservationItem.apptDate}</div>
                    <div className="text-sm">Dentist: {reservationItem.dentist}</div>
                    <button className="block rounded-md bg-sky-600 hover:bg-indigo-600 px-3 py-2 text-white shadow-sm" onClick={() => deleteBooking(reservationItem.apptDate, reservationItem.user, reservationItem.dentist, reservationItem.id, session?.user.token)}>Remove from Cart</button>
                </div>
            ))
        }
        </>
    )
}