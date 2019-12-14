export interface User {
    email: string;
    password: string;
    role: Role
}

export enum Role
{
    EMPLOYEE,
    MANAGER,
    NO_ROLE
}