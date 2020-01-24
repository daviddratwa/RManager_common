import { Restaurant } from "./Disponibility";

export interface ScheduleItem
{
    firstName: string,
    lastName: string,
    restaurant: Restaurant,
    weekFrom: Date,
    time: string,
    day: string
}