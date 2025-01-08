import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private _url = "https://677e164a94bde1c1252a4ef1.mockapi.io";
 http = inject(HttpClient);

 getAllUsers(): Observable<User[]>{
  return this.http.get<User[]>(`${this._url}/users`);
 }

 createUser(user: User): Observable<User>{
  return this.http.post<User>(`${this._url}/users`, user);

 }
 updateUser(id: string, user: User): Observable<User>{
  return this.http.put<User>(`${this._url}/users/${id}`, user);
 }

getUserById(id: string): Observable<User>{
  return this.http.get<User>(`${this._url}/users/${id}`)
}
deleteUser(id: string): Observable<unknown>{
  return this.http.delete(`${this._url}/users/${id}`);
}
}
