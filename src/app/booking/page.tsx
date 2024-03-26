'use client'
import DateReserve from "@/components/DateReserve";
import dayjs, { Dayjs } from "dayjs";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
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
            addBooking(dayjs(pickupDate).format("YYYY/MM/DD"), userid, did, token)
        }
    }

    const [name, setName] = useState<string | null>(dentistName);
    const [pickupDate, setPickupDate] = useState<Dayjs|null>(null)

    return(
        <main className="w-[100%] h-[80vh] flex flex-col items-center space-y-4 overflow-hidden">
            <div className="text-3xl font-bold text-black py-[20px]">Dentist Booking</div>
            <div className="relative min-w-[450px] w-[30vw] h-[60vh] space-y-2 shadow-2xl rounded-lg bg-white p-[45px]">
                <div className="w-full space-y-2 pb-[25px] text-center">
                    <TextField variant="standard" name="Name" label="Name" defaultValue={dentistName}
                    onChange={(e)=>{setName(e.target.value)}}/> 
                </div>
                <div className="w-full space-y-2 pb-[145px]">
                    <div className="text-bold text-center text-gray-600 text-lg pb-[10px]">Pick-Up Appointment Date</div>
                    <div className="w-[60%] ml-[97px]">
                    <DateReserve onDateChange={(value:Dayjs) => {setPickupDate(value)}}/>
                    </div>
                </div>

                <button className="ml-[170px] block rounded-md bg-sky-600 hover:bg-indigo-600 px-5 py-2 text-white shadow-sm items-center" onClick={makeReservation}>Book Dentist</button>
                <div className="absolute bottom-[-150px]">
                    <div>date: {dayjs(pickupDate).format("YYYY/MM/DD")}</div>
                    <div>userid: {userid}</div>
                    <div>did: {did}</div>
                    <div>token: {token}</div>
                </div>
            </div>
        </main>
    );
}