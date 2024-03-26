'use client'
import DateReserve from "@/components/DateReserve";
import dayjs, { Dayjs } from "dayjs";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { ReservationItem } from "../../../interfaces";
import { addReservation } from "@/redux/features/cartSlice";
import { TextField } from "@mui/material";
import addBooking from "@/libs/addBooking";
export default function Reservations(){

    const urlParams = useSearchParams();
    const did = urlParams.get('id');
    const dentistName = urlParams.get('name');
    const userid = urlParams.get('userid')
    const token = urlParams.get('token')
    const makeReservation = () => {
        if(did && pickupDate && userid) {
            addBooking('2021-10-02T17:00:00.000Z', userid, did, token)
        }
    }

    const [name, setName] = useState<string | null>(dentistName);
    const [pickupDate, setPickupDate] = useState<Dayjs|null>(null)

    return(
        <main className="w-[100%] flex flex-col items-center space-y-4">
            <div className="text-xl font-medium">New Dentist Booking</div>
            <div className="w-fit space-y-2">
                <TextField variant="standard" name="Name" label="Name" defaultValue={dentistName}
                onChange={(e)=>{setName(e.target.value)}}/> 
                {/*should be dropdown list of dentist?*/}
            </div>
            <div className="w-fit space-y-2">
                <div className="text-md text-left text-gray-600">Pick-Up Appointment Date</div>
                <DateReserve onDateChange={(value:Dayjs) => {setPickupDate(value)}}/>
            </div>

            <button className="block rounded-md bg-sky-600 hover:bg-indigo-600 px-3 py-2 text-white shadow-sm" onClick={makeReservation}>Book Dentist</button>
            <div>
                <div>date: {dayjs(pickupDate).format("YYYY/MM/DD")}</div>
                <div>userid: {userid}</div>
                <div>did: {did}</div>
                <div>token: {token}</div>
            </div>
        </main>
    );
}