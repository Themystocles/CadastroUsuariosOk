import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpdateUserComponent } from './update-user/update-user.component';
import { DeleteUserComponent } from './delete-user/delete-user.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { CadastroUsuarioComponent } from './cadastro-usuario/cadastro-usuario.component';

const routes: Routes = [
  { path: '', redirectTo: 'User', pathMatch: 'full' },
  {path:  'User', component: UsuariosComponent},
  { path: 'User/update/:id', component: UpdateUserComponent },
  { path: 'User/delete/:id', component: DeleteUserComponent },
  { path: 'User/update/:id', component: CadastroUsuarioComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
