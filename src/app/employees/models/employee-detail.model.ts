import { IEmployee } from "./employees.model"

export interface IEmployeeDetail {
    status: string
    data: IEmployee
    message: string
}