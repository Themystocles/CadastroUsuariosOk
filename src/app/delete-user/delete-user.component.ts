import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { ActivatedRoute } from '@angular/router';
import { Usuario } from '../UserModel';

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.scss']
})
export class DeleteUserComponent implements OnInit{
  id!: string;

  usuario!: Usuario


  constructor(public deleteUserService : UsersService, public route: ActivatedRoute) {
    
    
  }

  ngOnInit(): void {
    this.GetUser()
    
  }

  GetUser() {
    this.id = String(this.route.snapshot.paramMap.get('id'))
    this.deleteUserService.getUsuariosbyId(this.id).subscribe(res => this.usuario = {
      id: '9',
      nome: `${res.nome}`,
      profissao: `${res.profissao}`,
      idade: 28

    })
}
delete() {
  this.deleteUserService.delete(this.id).subscribe(res => { alert(`Game  ${this.usuario.nome} foi Deletado  com sucesso!!!`) })
}
}
