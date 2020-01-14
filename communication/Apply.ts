export interface Apply
{
    name: String,
    lastName: String,
    mail: String, 
    tel: String,
    applyType: ApplyType,
    applyStatus: ApplyStatus,
    fileName: string
}

export enum ApplyType
{
    STUDENT, 
    FULL
}

export enum ApplyStatus
{
    UNREADED,
    READED, 
    CONTACTED
}

export function applyTypeToString(type: ApplyType): String
{
    return type == ApplyType.FULL 
        ? "Full"
        : "Student";
}

export function applyTypeToEnum(type: String): ApplyType
{
    return type == "Full"
        ? ApplyType.FULL
        : ApplyType.STUDENT;
}