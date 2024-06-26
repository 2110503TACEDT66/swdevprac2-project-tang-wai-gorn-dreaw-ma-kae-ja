import { Suspense } from "react";
import LinearProgress from "@mui/material/LinearProgress";
import getBooking from "@/libs/getBooking";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import ReservationCart from "@/components/ReservationCart";
export default async function MyBooking(){

    const session = await getServerSession(authOptions);
    const bookings = await getBooking(session?.user.token || undefined);

    return (
        <main className="text-center p-5">
            <h1 className="text-2xl mt-5 font-medium text-black">Manage Your Booking</h1>
            <Suspense fallback={<p className="text-black">Loading ... <LinearProgress/></p>}>
                <ReservationCart bookingJson={bookings}/>
            </Suspense>
        </main>
    );
}