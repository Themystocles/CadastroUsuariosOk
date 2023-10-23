import { Component } from '@angular/core';
import { UsersService } from '../users.service';
import { CadUsuario, Usuario } from '../UserModel';

@Component({
  selector: 'app-cadastro-usuario',
  templateUrl: './cadastro-usuario.component.html',
  styleUrls: ['./cadastro-usuario.component.scss']
})
export class CadastroUsuarioComponent {

  usuario : CadUsuario ={
    nome: "Ronaldo",
    profissao: "Mototaxista",
    idade: 55
  }
  constructor(public userServices: UsersService) {
    
  }

  Cadastrarusuario(){
    this.userServices.cadastroUsuario(this.usuario).subscribe( res => alert(`Usuario ${this.usuario.nome} Criado com sucesso!!!`) )
  

}
}