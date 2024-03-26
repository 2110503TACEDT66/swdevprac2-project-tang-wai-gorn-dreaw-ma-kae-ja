'use client'
import { useSearchParams } from "next/navigation";

export default function ManageReservations(){

    const urlParams = useSearchParams();

    return(
        <main className="w-[100%] flex flex-col items-center space-y-4 pb-[200px] pt-[15px]">
            <div className="text-2xl font-semibold text-black py-[15px]">Manage Your Booking</div>
            <div className="relative min-w-[750px] w-[50vw] h-[60vh] space-y-2 shadow-2xl rounded-3xl bg-white p-[45px]">
                <div className='w-[50%] h-[55%] relative rounded-t-lg'>
                    <div className="relative text-black text-xl font-semibold p-[5px] pb-[15px]">Your Booking</div>
                    <img src='/img/dentist-default.jpg' alt='Dentist Image Template' className="w-100 h-[285px] rounded-xl" />
                </div>
                <div className="relative h-3/5 w-[50%] top-[-43%] left-[37%]"> 
                    <div className="text-black text-lg relative left-[30px] pb-[8px]">
                        {/*dentistName*/}DentistName
                    </div>
                    <div className="text-black text-lg relative left-[30px] pb-[8px]">
                        {/*dentistExp*/}Experience : DentistExperience
                    </div>
                    <div className="text-black text-lg relative left-[30px] pb-[32px]">
                        {/*dentistExpertise*/}Expertise : DentistExpertise
                    </div>
                    <div className="text-black text-lg relative left-[30px]">
                        {/*ApptDate*/}AppointmentDate
                    </div>
                </div>
                <div className="absolute h-2/5 left-[60%] bottom-[-25%]">
                    <button className="bg-orange-500 rounded-lg p-[10px] mx-[10px]">Edit Booking</button>
                    <button className="bg-red-600 rounded-lg p-[10px] mx-[10px]">Delete Booking</button>
                </div>
            </div>
        </main>
    );
}