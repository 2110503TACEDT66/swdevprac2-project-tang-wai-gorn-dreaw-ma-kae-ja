import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import getUserProfile from "@/libs/getUserProfile";
import Dentist from "@/db/models/Dentist";
import { dbConnect } from "@/db/config/dbConnect";
import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";

export default async function DashboardPage(){
    
    const addDentist = async (addDentistForm:FormData) => {
        "use server"
        const name = addDentistForm.get("name")
        const experience = addDentistForm.get("experience")
        const expertise = addDentistForm.get("expertise")

        try{
            await dbConnect()
            const dentist = await Dentist.create({
                "name": name,
                "experience": experience,
                "expertise": expertise,
            })
        } catch(error){ console.log(error)}
        revalidateTag("cars")
        redirect("/car")
    }

    const session = await getServerSession(authOptions)
    if(!session || !session.user.token) return null

    const profile = await getUserProfile(session.user.token)
    var createdAt = new Date(profile.data.createdAt)

    return (
        <main className="bg-slate-100 m-5 p-5">
            <div className="text-2xl">{profile.data.name}</div>
            <table className="table-auto border-separate border-spacing-2">
                <tbody>
                    <tr>
                        <td>Email</td><td>{profile.data.email}</td>
                    </tr>
                    <tr>
                        <td>Tel.</td><td>{profile.data.tel}</td>
                    </tr>
                    <tr>
                        <td>Member Since</td><td>{createdAt.toString()}</td>
                    </tr>                
                </tbody>
            </table>

            {
                (profile.data.role == "admin")?
                <form action={addDentist}>
                    <div className="text-xl text-blue-700">Create Dentist Model</div>
                    <div className="flex items-center w-1/2 my-2">
                        <label className="w-auto block text-gray-700 pr-4" htmlFor="name">Name</label>
                        <input type="text" required id="name" name="name" placeholder="Dentist Name" className="bg-white border-2 border-gray-200 rounded w-full p-2 text-gray-700 focus:outline-none focus:border-blue-400"/>
                    </div>
                    <div className="flex items-center w-1/2 my-2">
                        <label className="w-auto block text-gray-700 pr-4" htmlFor="experience">experience</label>
                        <input type="text" required id="experience" name="experience" placeholder="Dentist Experience" className="bg-white border-2 border-gray-200 rounded w-full p-2 text-gray-700 focus:outline-none focus:border-blue-400"/>
                    </div>
                    <div className="flex items-center w-1/2 my-2">
                        <label className="w-auto block text-gray-700 pr-4" htmlFor="expertise">Expertise</label>
                        <input type="text" required id="expertise" name="expertise" placeholder="Dentist Expertise" className="bg-white border-2 border-gray-200 rounded w-full p-2 text-gray-700 focus:outline-none focus:border-blue-400"/>
                    </div>
                    <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white p-2 rounded">Add new dentist</button>
                </form>
                : null
            }   
        </main>
    );
}