import { Restaurant } from "./Disponibility";

export interface Hour
{
    id: number,
    email: string,
    restaurant: Restaurant,
    nbHours: number,
    date: string,
    from: string,
    to: string,
    accepted: boolean,
    weekFrom: Date
}