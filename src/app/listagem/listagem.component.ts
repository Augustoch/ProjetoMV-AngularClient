import { EditarPessoaComponent } from './../pessoa/editar-pessoa/editar-pessoa.component';
import { pessoaQtdN } from './../pessoa/pessoaQtdN.model';
import { element } from 'protractor';
import { Pessoa } from './../pessoa/pessoa.model';
import { PessoaService } from './../pessoa/pessoa.service';
import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core/';
import { Location } from '@angular/common';



@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.css'],
  providers: [
    PessoaService
  ]
})
export class ListagemComponent implements OnInit {

  pessoas: Pessoa[];
  pess: pessoaQtdN[];
  public static pessoaEditar: Pessoa;
  p:string = "ovo";


  constructor(private pessoaService: PessoaService, private location: Location) {
    ListagemComponent.pessoaEditar = new Pessoa;
    this.pessoas = new Array();
    this.pess = new Array;
    this.pess = this.todasPessoas();
    
  }

  ngOnInit() {
    console.log(this.pessoaService.getPessoas);
    
  }
  private refreshDados() {
   
    
  }

  private todasPessoas(): pessoaQtdN[] {
    return this.pessoaService.getPessoas();
  }

  excluirPessoa(pesso: Pessoa) {
    if (confirm("deseja realmente excluir " + pesso.nome)) {
      this.pessoaService.deteletarPessoa(pesso.id).subscribe();

    }
    this.refreshDados();
  }

  chamaEditor(pessoa: Pessoa) {
    ListagemComponent.pessoaEditar = pessoa;
    
  }

}
