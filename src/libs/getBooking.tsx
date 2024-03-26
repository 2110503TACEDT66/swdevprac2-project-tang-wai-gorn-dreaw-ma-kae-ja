export default async function getBooking(token: string | undefined) {
    try {

        const response = await fetch("http://localhost:5000/api/v1/bookings", {
            method: "GET",
            headers: {
                authorization: `Bearer ${token}`
            }
        });

        if (!response.ok) {
            throw new Error("Failed to fetch bookings");
        }

        return await response.json();
    } catch (error) {
        console.error("Fetch error:", error);
        throw new Error("Error fetching bookings");
    }
}