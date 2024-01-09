import { IEmployee } from "./employees.model";

export class ISearchTermRequest {
    employees: IEmployee[] = []
    searchTerm: string = ""
}