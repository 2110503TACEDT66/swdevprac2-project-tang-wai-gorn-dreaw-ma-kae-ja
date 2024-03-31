import mongoose from "mongoose";

export default async function addBooking(appDate: string, userid: string, did: string, token: string | null) {
    // const userId = new mongoose.Types.ObjectId(userid);

    const response = await fetch(`${process.env.BACKEND_URL}/api/v1/dentists/${did}/bookings`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${token}`
        },
        body: JSON.stringify({
            apptDate: appDate,
            user: userid
        })
    });
    if(response.status === 400) alert('you can only book 1 booking!!');
    else if(response.status === 401) throw new Error("Failed to add a booking");
    return await response.json();
}