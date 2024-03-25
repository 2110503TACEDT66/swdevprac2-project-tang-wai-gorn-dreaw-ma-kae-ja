import getDentist from "@/libs/getDentist";
import Link from "next/link";

export default async function DentistDetailPage({ params }: { params: { id: string } }) {

    const dentistDetail = await getDentist(params.id);

    return (
        <main className="container mx-auto px-4 py-8 flex flex-col items-center">
            <h1 className="text-3xl font-semibold mb-4 text-center">{dentistDetail.data.name}</h1>
            <div className="flex mt-10">
                <img src='/img/dentist-default.jpg' alt={dentistDetail.data.name} className="w-auto h-64 rounded-xl mr-8" />
                <div className="mt-10">
                    <div className="text-lg mb-4">Experience: {dentistDetail.data.experience} years</div>
                    <div className="text-lg mb-4">Expertise: {dentistDetail.data.expertise}</div>
                    <Link href={`/reservations?id=${params.id}&name=${dentistDetail.data.name}`}>
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            Book this dentist
                        </button>
                    </Link>
                </div>
            </div>
        </main>
    );
}
