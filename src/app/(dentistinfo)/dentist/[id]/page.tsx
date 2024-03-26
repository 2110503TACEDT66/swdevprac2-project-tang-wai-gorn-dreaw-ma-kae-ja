import getDentist from "@/libs/getDentist";
import Link from "next/link";
import getMe from "@/libs/getUserProfile";
import { Session, getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import getUserProfile from "@/libs/getUserProfile";
export default async function DentistDetailPage({ params }: { params: { id: string } }) {

    const dentistDetail = await getDentist(params.id);
    
    const session = await getServerSession(authOptions)
    const userDetail = await getUserProfile(session?.user.token)
    return (
        <main className="container mx-auto px-4 py-8 flex flex-col items-center">
            <h1 className="text-3xl font-semibold mb-4 text-center">{dentistDetail.data.name}</h1>
            <div className="flex mt-10">
                <img src='/img/dentist-default.jpg' alt={dentistDetail.data.name} className="w-auto h-64 rounded-xl mr-8" />
                <div className="mt-10">
                    <div className="text-lg mb-4">Experience: {dentistDetail.data.experience} years</div>
                    <div className="text-lg mb-4">Expertise: {dentistDetail.data.expertise}</div>
                    <Link href={`/booking?id=${params.id}&name=${dentistDetail.data.name}&userid=${userDetail.data._id}`}>
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            Book this dentist
                        </button>
                    </Link>
                </div>
            </div>
        </main>
    );
}
