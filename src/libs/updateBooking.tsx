export default async function updateBooking(apptDate: string, user: string, did: string, bid:string, token:string){
    
    const response = await fetch(`http://localhost:5000/api/v1/Bookings/${bid}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${token}`
        },
        body: JSON.stringify({
            apptDate: apptDate,
            dentist: did
        }),
    })

    if(!response.ok) throw new Error("Cannot update bookings")
    return await response.json()
}