import { Telefone } from './../telefone.model';
import { ListagemComponent } from './../../listagem/listagem.component';
import { Pessoa } from './../pessoa.model';
import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core/';

@Component({
  selector: 'app-editar-pessoa',
  templateUrl: './editar-pessoa.component.html',
  styleUrls: ['./editar-pessoa.component.css'],
  providers: [Pessoa]
})
export class EditarPessoaComponent implements OnInit {

  pessoa: Pessoa = ListagemComponent.pessoaEditar
  telefones: Telefone[];
  phones: Telefone[];
  phone: Telefone;
  constructor() {
    this.phone = new Telefone;
    console.log(this.pessoa);
  }

  ngOnInit() {
    this.phones = new Array
    this.telefones = new Array
    this.pessoa.telefones.forEach(element => {
      let telefone: Telefone = new Telefone;
      telefone = element;
      this.telefones.push(telefone);
    });
    console.log(this.telefones);
  }

  salvarTelefone() {
    let telefone: Telefone = new Telefone;
    telefone.id = this.phone.id;
    telefone.ddd = this.phone.ddd;
    telefone.numero = this.phone.numero;
    this.telefones.push(telefone);
  }

  removerNumero(phone) {
    this.telefones.splice(this.telefones.indexOf(phone), 1);
  }

}
