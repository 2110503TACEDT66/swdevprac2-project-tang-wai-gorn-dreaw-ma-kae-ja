export default async function userRegister(name:string, tel:string, email:string, password:string){

    const response = await fetch("http://localhost:5000/api/v1/auth/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            name: name,
            tel: tel,
            email: email,
            password: password
        }),
    })
    if(!response.ok) throw new Error("Failed to Register")
    return await response.json()
}