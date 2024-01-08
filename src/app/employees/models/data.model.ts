import { IEmployee } from "./employees.model"

export interface IData {
    status: string
    data: IEmployee[]
    message: string
}