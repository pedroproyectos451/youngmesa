import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {User} from '../model/user.model';
import {Observable} from 'rxjs/index';
import {ApiResponse} from '../model/api.response';

@Injectable()
export class ApiService {

  constructor(private http: HttpClient) { }
  // baseUrl = 'http://localhost:8080/users/';
  baseUrl = 'https://young-mesa-71901.herokuapp.com/users/';

  login(loginPayload): Observable<ApiResponse> {
    // return this.http.post<ApiResponse>('http://localhost:8080/' + 'token/generate-token', loginPayload);
    return this.http.post<ApiResponse>('https://young-mesa-71901.herokuapp.com/' + 'token/generate-token', loginPayload);
  }

  getUsers(): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseUrl);
  }

  getUserById(id: number): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseUrl + id);
  }

  createUser(user: User): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(this.baseUrl, user);
  }

  updateUser(user: User): Observable<ApiResponse> {
    return this.http.put<ApiResponse>(this.baseUrl + user.id, user);
  }

  deleteUser(id: number): Observable<ApiResponse> {
    return this.http.delete<ApiResponse>(this.baseUrl + id);
  }
}
