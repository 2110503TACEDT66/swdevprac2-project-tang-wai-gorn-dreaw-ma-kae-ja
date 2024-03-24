export interface ReservationItem{
    carId: string,
    carModel: string,
    numOfDays: number,
    pickupDate: string,
    pickupLocation: string,
    returnDate: string,
    returnLocation: string
}


export interface Dentist{
    id: string,
    name: string,
    experience:number,
    expertise:number
}

export interface DentistJson {
    success: boolean,
    count: number,
    pagination: Object,
    data: Dentist[]
  }