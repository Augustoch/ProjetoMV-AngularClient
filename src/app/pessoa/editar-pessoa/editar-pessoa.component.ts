import { element } from 'protractor';
import { PessoaService } from './../pessoa.service';
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
  
  phone: Telefone;
  constructor(private pessoaService: PessoaService) {
    this.phone = new Telefone;
    
  }

  ngOnInit() {
    
    this.telefones = new Array
    this.pessoa.telefones.forEach(element => {
      
      this.telefones.push(element);
    });
    
  }

  salvarTelefone() {
    let telefone: Telefone = new Telefone;
    telefone.ddd = this.phone.ddd;
    telefone.numero = this.phone.numero;
    this.telefones.push(telefone);
  }

  removerNumero(phone) {
    this.telefones.splice(this.telefones.indexOf(phone), 1);
  }

  atualizarNoBanco(){
    this.pessoa.telefones = new Array;
    this.telefones.forEach(element => {
      this.pessoa.telefones.push(element);
    });
    console.log("fred vs "+JSON.stringify(this.pessoa));
    this.pessoaService.atualizarPessoa(this.pessoa).subscribe();
    
  }

}
