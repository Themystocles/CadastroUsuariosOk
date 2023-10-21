import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from './UserModel';



@Injectable({
  providedIn: 'root'
})
export class UsersService {
  url = "http://localhost:5143/api/Usuario"

  constructor(public http: HttpClient) { }
  
  getUsuarios(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(this.url)
}
getUsuariosbyId(id: number): Observable<Usuario>{
  const urlID = `${this.url}/${id}`
  return this.http.get<Usuario>(urlID)
}
}