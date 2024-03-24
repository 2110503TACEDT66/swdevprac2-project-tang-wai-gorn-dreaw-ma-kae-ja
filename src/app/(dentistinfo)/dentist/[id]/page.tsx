import getDentist from "@/libs/getDentist";
import Link from "next/link";

export default async function DentistDetailPage({ params }: { params: { id: string } }) {

    const dentistDetail = await getDentist(params.id);

    return (
        <main className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-semibold mb-4">{dentistDetail.data.name}</h1>
            <div className="flex flex-col md:flex-row items-start justify-between">
                <div className="md:w-1/2">
                    <div className="text-lg mb-4">Experience: {dentistDetail.data.experience}</div>
                    <div className="text-lg mb-4">Expertise: {dentistDetail.data.expertise}</div>

                    <Link href={`/reservations?id=${params.id}`}>
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            Book this dentist
                        </button>
                    </Link>
                </div>
            </div>
        </main>
    );
}
