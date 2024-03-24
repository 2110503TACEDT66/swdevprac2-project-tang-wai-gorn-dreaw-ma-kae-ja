import { Link } from "@mui/material"
import ProductCard from "./ProductCard"
import { Dentist, DentistJson } from "../../interfaces"

export default async function CarCatalog({dentistsJson}: {dentistsJson:Promise<DentistJson>}){
    const dentistsJsonReady = await dentistsJson
    return(
        <div>
            <div>Explore {dentistsJsonReady.count} dentists</div>
            <div style={{margin: "20px", display: "flex", flexDirection:"row", alignContent:"space-around", justifyContent:"space-around", flexWrap:"wrap"}}>
                {
                    dentistsJsonReady.data.map((dentist:Dentist) => (
                        <Link href={`/car/${dentist.id}`} className="w-[100%] sm:w-[50%} md:w-[30%] lg:w-[25%] p-2 sm:p-4 md:p-4 lg:p-8">
                        <ProductCard dentistName={dentist.name} experience={dentist.experience} expertise={dentist.expertise}/>
                        </Link>
                    ))
                }
            </div>
        </div>
    )
}