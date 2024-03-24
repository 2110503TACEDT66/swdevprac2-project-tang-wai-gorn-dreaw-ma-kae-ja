import getDentists from "@/libs/getDentists";
import CarCatalog from "@/components/CarCatalog";
import { Suspense } from "react";
import LinearProgress from "@mui/material/LinearProgress";
export default function Dentist(){

    const dentists = getDentists()

    return (
        <main className="text-center p-5">
            <h1 className="text-xl font-medium">Select Your Dentist</h1>
            <Suspense fallback={<p>Loading ... <LinearProgress/></p>}>
                <CarCatalog dentistsJson={dentists}/>
            </Suspense>
        </main>
    );
}