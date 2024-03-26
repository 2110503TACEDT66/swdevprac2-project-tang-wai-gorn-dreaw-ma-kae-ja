export default async function updateBooking(apptDate: string, bid:string, token:string){
    
    const response = await fetch(`${process.env.BACKEND_URL}/api/v1/Bookings/${bid}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${token}`
        },
        body: JSON.stringify({
            apptDate: apptDate,
        }),
    })

    if(!response.ok) throw new Error("Cannot update bookings")
    return await response.json()
}