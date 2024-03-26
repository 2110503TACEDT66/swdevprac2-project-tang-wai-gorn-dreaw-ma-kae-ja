
export default async function updateBooking(apptDate: string, user: string, did: string, bid:string, token:string){
    
    const response = await fetch(`http://localhost:5000/api/v1/Bookings/${bid}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${token}`
        },
    })

    if(!response.ok) throw new Error("Cannot delete bookings")
    return await response.json()
}