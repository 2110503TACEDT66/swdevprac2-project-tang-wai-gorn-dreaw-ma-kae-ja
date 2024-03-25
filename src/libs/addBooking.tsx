import mongoose from 'mongoose';

export default async function addBooking(apptDate: string, user: typeof mongoose.Schema.ObjectId, dentist: typeof mongoose.Schema.ObjectId) {
    const response = await fetch("http://localhost:5000/api/v1/books/:dentistId/Booking", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            apptDate: apptDate,
            user: user,
            dentist: dentist,
        }),
    });
    if (!response.ok) throw new Error("Failed to add a booking");
    return await response.json();
}
