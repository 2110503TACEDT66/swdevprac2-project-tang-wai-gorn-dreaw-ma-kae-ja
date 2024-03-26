'use client'

import deleteBooking from "@/libs/deleteBooking";
import { ReservationItem } from "../../interfaces";
import updateBooking from "@/libs/updateBooking";
import { useState } from "react";

export default function BookingCard({booking, token} : {booking:ReservationItem, token:string}) {

    const handleDelete = (booking: ReservationItem) => {
        deleteBooking(booking._id, token);
        window.location.reload();
    }

    const [newDate, setNewDate] = useState(booking.apptDate)
    const handleUpdate = (booking: ReservationItem) => {
        updateBooking(newDate, booking._id, token);
        alert('Appointment Updated!')
    };

    const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNewDate(event.target.value);
    };

    return (
        <main className="bg-slate-200 flex flex-row">
            <div className='w-[50%] p-5 relative rounded-t-lg'>
                <img src='/img/dentist-default.jpg' alt='Dentist Image Template' className="w-100 h-[285px] rounded-xl" />
            </div>
            <div className="relative w-[60%] pt-10 pr-5 text-left"> 
                <div className="text-black text-lg relative left-[30px] pb-[8px]">
                    {/* dentistName*/}DentistName : {booking.dentist.name}
                </div>
                <div className="text-black text-lg relative left-[30px] pb-[8px]">
                    {/*dentistExp*/}Experience : {booking.dentist.experience}
                </div>
                <div className="text-black text-lg relative left-[30px] pb-[32px]">
                    {/*dentistExpertise*/}Expertise : {booking.dentist.expertise}
                </div>
                <div className="text-black text-md relative left-[30px]">
                    {/* ApptDate*/}AppointmentDate :
                    <input value={newDate} defaultValue={booking.apptDate} onChange={handleDateChange}></input>
                </div>
                <div className="absolute h-[10%] bottom-[5%] flex flex-row">
                    <button className="bg-orange-500 rounded-lg p-[5px] mx-[10px]" onClick={()=> handleUpdate(booking)}>Save Edit</button>
                    <button className="bg-red-600 rounded-lg p-[5px] mx-[10px]" onClick={()=> handleDelete(booking)}>Delete Booking</button>
                </div>
            </div>
            
        </main>
    );
}