import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import EmployeeRes from './employee_res.vo';


@Injectable({
  providedIn: 'root'
})
export class FetchService {

  constructor(private httpClient: HttpClient) { }
  fetchData():Observable<EmployeeRes> {
    return this.httpClient.get<EmployeeRes>("https://dummy.restapiexample.com/api/v1/employees");
  }
}
