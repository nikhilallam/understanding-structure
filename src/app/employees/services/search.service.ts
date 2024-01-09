import { Injectable } from '@angular/core';
import { ISearchTermRequest } from '../models/search-term.request.model';
import { IEmployee } from '../models';

@Injectable({
  providedIn: 'root'
})

export class SearchService {
  getSearchTerm(searchTermRequest: ISearchTermRequest): IEmployee[] {
    return searchTermRequest.employees.filter((employee) =>
          employee.employee_name.toLowerCase().includes(searchTermRequest.searchTerm.toLowerCase())
    )
  }
}
