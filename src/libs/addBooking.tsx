import mongoose from 'mongoose';

export default async function addBooking(apptDate: string, user: string, did: string, token:string | null) {
    const userId = new mongoose.Types.ObjectId(user);
    
    const response = await fetch(`http://localhost:5000/api/v1/dentists/${did}/bookings`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${token}`
        },
        body: JSON.stringify({
            apptDate: apptDate,
            user: user
        }),
    });
    if(response.status === 400) alert('you can only book 1 booking!!')
    else if (response.status === 401) throw new Error("Failed to add a booking");
    return await response.json();
}
