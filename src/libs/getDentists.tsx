export default async function getDentists(){

    const response = await fetch(`${process.env.BACKEND_URL}/api/v1/dentists`, {next: {tags:['dentists']}})
    console.log(process.env.BACKEND_URL)
    if(!response.ok) throw new Error("Failed to fetch dentists")
    return await response.json()
}