import getDentists from "@/libs/getDentists";
import DentistCatalog from "@/components/DentistCatalog";
import { Suspense } from "react";
import LinearProgress from "@mui/material/LinearProgress";
export default function Dentist(){

    const dentists = getDentists()

    return (
        <main className="text-center p-5">
            <h1 className="text-xl font-medium text-black">Select Your Dentist</h1>
            <Suspense fallback={<p className="text-black">Loading ... <LinearProgress/></p>}>
                <DentistCatalog dentistsJson={dentists}/>
            </Suspense>
        </main>
    );
}