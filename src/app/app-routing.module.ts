import { EditarPessoaComponent } from './pessoa/editar-pessoa/editar-pessoa.component';
import { Routes, RouterModule } from '@angular/router';
import { PessoaComponent } from './pessoa/pessoa.component';
import { ListagemComponent } from './listagem/listagem.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PgnfComponent } from './pgnf/pgnf.component';

const   appRoutes: Routes = [
  {path: '', redirectTo:'/listagem',  pathMatch: 'full'},
  {path: 'listagem', component: ListagemComponent},
  {path: 'cadastro', component: PessoaComponent},
  {path: 'editar', component: EditarPessoaComponent},

];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes),
    
  ],
  exports: [
    RouterModule
  ]
})
export class ApproutingModule { }
