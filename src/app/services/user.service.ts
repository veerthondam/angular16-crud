import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, Subject, tap } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private _url = "https://677e164a94bde1c1252a4ef1.mockapi.io";
 http = inject(HttpClient);
 private userUpdatedSubject = new Subject<void>();
 userUpdated$ = this.userUpdatedSubject.asObservable();


 getAllUsers(): Observable<User[]>{
  return this.http.get<User[]>(`${this._url}/users`);``
 }

 createUser(user: User): Observable<User>{
  return this.http.post<User>(`${this._url}/users`, user).pipe(tap(
    () => this.userUpdatedSubject.next()
  ));

 }
 updateUser(id: string, user: User): Observable<User>{
  return this.http.put<User>(`${this._url}/users/${id}`, user)
  .pipe(
    tap(() => this.userUpdatedSubject.next())
  );
 }

getUserById(id: string): Observable<User>{
  return this.http.get<User>(`${this._url}/users/${id}`)
}
deleteUser(id: string): Observable<unknown>{
  return this.http.delete(`${this._url}/users/${id}`).pipe(
    tap(() => this.userUpdatedSubject.next())
  );
}
}
