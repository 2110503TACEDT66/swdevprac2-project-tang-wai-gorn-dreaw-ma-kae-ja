
export default async function deleteBooking(bid:string, token:string){
    
    const response = await fetch(`${process.env.BACKEND_URL}/api/v1/Bookings/${bid}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${token}`
        },
    })

    if(!response.ok) throw new Error("Cannot delete bookings")
    return await response.json()
}