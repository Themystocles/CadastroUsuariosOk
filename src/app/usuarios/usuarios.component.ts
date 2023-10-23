import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { Usuario } from '../UserModel';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss']
})
export class UsuariosComponent implements OnInit{
  Users! : Usuario[]
  Idusuario! : string;
  usuario! : Usuario

  
  constructor(public UsuarioServices: UsersService) { 
   
    
  }
  ngOnInit(): void {
  
    this.UsuarioServices.getUsuarios().subscribe(res => this.Users = res)
    
  }
   PegarporID(){

  this.UsuarioServices.getUsuariosbyId(this.Idusuario).subscribe(res => this.usuario = res)
   }
 

}
