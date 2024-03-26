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
                        <BookingCard booking={booking} token={session?.user.token as string}/>
                    ))
                }
            </div>
        </div>
    )
}