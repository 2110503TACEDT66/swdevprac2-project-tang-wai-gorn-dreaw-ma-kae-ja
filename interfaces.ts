export interface ReservationItem{
    apptDate: string,
    user: string,
    dentist: string
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