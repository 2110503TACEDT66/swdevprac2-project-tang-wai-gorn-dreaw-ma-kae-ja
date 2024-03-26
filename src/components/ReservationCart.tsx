import { Link } from "@mui/material"
import ProductCard from "./ProductCard"
import { BookingJson, Dentist, DentistJson, ReservationItem } from "../../interfaces"
import updateBooking from "@/libs/updateBooking"
import { getServerSession } from "next-auth"
import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import deleteBooking from "@/libs/deleteBooking"
import BookingCard from "./BookingCard"

export default async function ReservationCart({bookingJson}: {bookingJson:BookingJson}){
    
    const bookingJsonReady = await bookingJson
    const session = await getServerSession(authOptions);

    return(
        <div>
            <div style={{margin: "20px", display: "flex", flexDirection:"row", alignContent:"space-around", justifyContent:"space-around", flexWrap:"wrap"}}>
                {
                    bookingJsonReady.data.map((booking:ReservationItem)=> (
<<<<<<< HEAD
                        <BookingCard booking={booking} token={session?.user.token}/>
=======
                        <div className="relative min-w-[750px] w-[50vw] h-[60vh] space-y-2 shadow-2xl rounded-3xl bg-white p-[45px]">
                            <div className='w-[50%] h-[55%] relative rounded-t-lg'>
                                <img src='/img/dentist-default.jpg' alt='Dentist Image Template' className="w-100 h-[285px] rounded-xl" />
                            </div>
                            <div className="relative h-3/5 w-[50%] top-[-43%] left-[37%]"> 
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
                                    {/* ApptDate*/}AppointmentDate : {booking.apptDate}
                                </div>
                            </div>
                            <div className="absolute h-1/5 left-[55%] bottom-[-2%] flex flex-row">
                                <button className="h-[65px] w-[130px] bg-orange-500 rounded-lg p-[5px] mx-[15px]">Edit Booking</button>
                                <button className="h-[65px] w-[130px] bg-red-600 rounded-lg p-[5px] mx-[15px]" onClick={deleteBooking(booking.apptDate, booking.user, booking.dentist, booking.id, session?.user.token as string)}>Delete Booking</button>
                            </div>
                        </div>
>>>>>>> e8fd909256de95e9d3b57eb75dce0f88bfe5e0c2
                    ))
                }
            </div>
        </div>
    )
}