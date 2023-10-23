import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CadUsuario, Usuario } from './UserModel';



@Injectable({
  providedIn: 'root'
})
export class UsersService {
  url = "http://localhost:5143/api/Usuario"

  constructor(public http: HttpClient) { }
  
  getUsuarios(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(this.url)
}
getUsuariosbyId(id: string): Observable<Usuario>{
  const urlID = `${this.url}/${id}`
  return this.http.get<Usuario>(urlID)
}
UpdateUser(id: string, usuario: Usuario): Observable<Usuario>{
  const urlID = `${this.url}/${id}`
  return this.http.put<Usuario>(urlID, usuario)
}

cadastroUsuario(usuario : CadUsuario): Observable<CadUsuario>{
   return this.http.post<CadUsuario>(this.url, usuario)
   
}
delete(id: string): Observable<Usuario> {
  const urlID = `${this.url}/${id}`
  return this.http.delete<Usuario>(urlID)

}
}