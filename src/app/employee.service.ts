import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { User } from './employee';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private apiServerUrl = environment.apiBaseUrl;
  constructor(private http: HttpClient) { }

  public getEmployees(): Observable<User[]>{
    return this.http.get<User[]>(`${this.apiServerUrl}/api/employee`);
  }
  public addEmployee(user: User): Observable<User>{
    return this.http.post<User>(`${this.apiServerUrl}/api/`,user);
  }

  public updateEmployee(user: User): Observable<User>{
    return this.http.put<User>(`${this.apiServerUrl}/api/`,user);
  }

  public deleteEmployee(userId: number): Observable<void>{
    return this.http.delete<void>(`${this.apiServerUrl}/api/${userId}`);
  }
}
