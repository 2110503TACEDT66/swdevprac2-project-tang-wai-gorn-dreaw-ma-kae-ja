import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import ReservationCart from "@/components/ReservationCart";
import getBooking from "@/libs/getBooking";
import { LinearProgress } from "@mui/material";
import { getServerSession } from "next-auth";
import { Suspense } from "react";

export default async function ManageReservations(){

    const session = await getServerSession(authOptions);
    const bookings = await getBooking(session?.user.token);
    return(
        <main className="text-center text-lg">
            <div>Manage Your Booking</div>
            <Suspense fallback={ <p className="text-black">Loading ... <LinearProgress/></p> }>
                <ReservationCart bookingJson={bookings}/>
            </Suspense>
        </main>
    );
}