import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { Usuario } from '../UserModel';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.scss']
})
export class UpdateUserComponent implements OnInit{

  id! : string
  User! : Usuario

  
  constructor(private route: ActivatedRoute, public userservices : UsersService) {
    
  }
  ngOnInit(): void {
    this.GetUser();
  }

GetUser(){
  this.id = String(this.route.snapshot.paramMap.get('id'))
  this.userservices.getUsuariosbyId(this.id).subscribe(res => this.User ={
    id: "1",
    nome: `${res.nome}`,
    profissao: `${res.profissao}`,
    idade: Number(res.idade)
  })
}
updateUser() {

  this.userservices.UpdateUser(this.id, this.User!).subscribe(res => { alert(`Usuario  ${this.User.nome} foi alterado com sucesso!!!`) })


}
}
