import { HttpClient } from '@angular/common/http';
import { PessoaService } from './pessoa.service';
import { Telefone } from './telefone.model';
import { Pessoa } from './pessoa.model';
import { Component, OnInit, Input } from '@angular/core';
import { HttpHandler } from '@angular/common/http/src/backend';


@Component({
  selector: 'app-pessoa',
  templateUrl: './pessoa.component.html',
  styleUrls: ['./pessoa.component.css']
})
export class PessoaComponent implements OnInit {

  pessoa: Pessoa;
  telefone: Telefone;
  phones: Telefone[];
  phone: Telefone;
  tele: Array<Telefone>;

  constructor(private pessoaService: PessoaService) {
    this.pessoa = new Pessoa();
    this.telefone = new Telefone();
    this.pessoa.telefones = new Array;
    this.phones = new Array;
    
   }
  
  
  salvarNoBanco(){
    this.pessoa.telefones = this.phones;
    
    this.pessoaService.salvarPessoaNoBanco(this.pessoa);
    
   
  }
  
  
  
  salvarTelefone(){
    
    this.phone =  new Telefone();
    this.phone.ddd = this.telefone.ddd;
    this.phone.numero = this.telefone.numero;
        
    this.phones.push(this.phone);
    
  }

  removerNumero(phone: Telefone){
    
    
    this.phones.splice(this.phones.indexOf(phone),1);
    }
  

  ngOnInit() {


  }

}
