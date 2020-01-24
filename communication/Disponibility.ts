export interface Disponibility
{
    day: string, 
    time: string, 
    mail: string,
    firstName: string, 
    lastName: string,
    weekFrom: Date,
    restaurant: Restaurant
}

export interface Names
{
    firstName: string,
    lastName: string
}

export enum Restaurant
{
    Boondael, 
    Louise,
    Undefined
}