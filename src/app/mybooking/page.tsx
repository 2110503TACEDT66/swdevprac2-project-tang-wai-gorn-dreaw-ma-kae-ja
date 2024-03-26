import getDentists from "@/libs/getDentists";
import DentistCatalog from "@/components/DentistCatalog";
import { Suspense } from "react";
import LinearProgress from "@mui/material/LinearProgress";
import getBooking from "@/libs/getBooking";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import ReservationCart from "@/components/ReservationCart";
export default async function MyBooking(){

    const session = await getServerSession(authOptions);
    const bookings = getBooking(session?.user.token);

    return (
        <main className="text-center p-5">
            <h1 className="text-xl font-medium text-black">Manage Your Booking</h1>
            <Suspense fallback={<p className="text-black">Loading ... <LinearProgress/></p>}>
                <ReservationCart bookingJson={bookings}/>
            </Suspense>
        </main>
    );
}