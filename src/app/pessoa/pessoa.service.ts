import { pessoaQtdN } from './pessoaQtdN.model';
import { element } from 'protractor';
import { map, tap } from 'rxjs/operators';

import { HttpModule } from '@angular/http';
import { Pessoa } from './pessoa.model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { catchError, retry } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { Headers } from '@angular/http';
import { headersToString } from 'selenium-webdriver/http';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Telefone } from './telefone.model';
import { EventEmitter } from '@angular/core/';




@Injectable()
export class PessoaService {

  emitirPessoa = new EventEmitter<Pessoa>();

  u: string = "";
  url: string = "/pessoa/";
  pessoasUrl: string = "/pessoa/todas";

  private headers = new Headers({ 'Content-Type': 'application/json' });



  constructor(private http: Http, private httpCliente: HttpClient) {

  }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'my-auth-token'
    })
  };



  deteletarPessoa(id: number): Observable<Pessoa> {

    console.log(this.u+this.url + id);
    return this.httpCliente.delete<Pessoa>(this.u + this.url + id, this.httpOptions).pipe();

  }

  salvarPessoaNoBanco(pessoa: Pessoa): Promise<Pessoa> {
    console.log(JSON.stringify(pessoa.nome));

    return this.http.post(this.u + this.url, JSON.stringify(pessoa), { headers: this.headers })
      .toPromise()
      .then(res => res.json() as Pessoa)
      .catch(this.handleErrore);

  }

  atualizarPessoa(pessoa: Pessoa): Observable<Pessoa>{
    return this.httpCliente.put<Pessoa>(this.u+this.url, JSON.stringify(pessoa), this.httpOptions)
    .pipe();
  }

  getPessoas(): pessoaQtdN[] {
    let pps: pessoaQtdN[] = new Array();
    this.httpCliente.get(this.u + this.pessoasUrl)
      .subscribe(
      (data: any[]) => {
        for (let i = 0; i < data.length; i++) {
          let pp: pessoaQtdN = new pessoaQtdN;
          pp.pessoam = new Pessoa();
          pp.pessoam.id = data[i].id;
          pp.pessoam.nome = data[i].nome;
          pp.pessoam.cpf = data[i].cpf;
          pp.pessoam.email = data[i].email;
          pp.pessoam.dataDeNascimento = new Date(data[i].dataDeNascimento);
          let telefones: Telefone[] = new Array();
          for (let x = 0; x < data[i].telefones.length; x++) {
            let telefone: Telefone = new Telefone();
            
            pp.qtdN = data[i].telefones.length;
            telefone.id = data[i].telefones[x].id;

            telefone.ddd = data[i].telefones[x].ddd;
            telefone.numero = data[i].telefones[x].numero;
            telefones.push(telefone);
            pp.pessoam.telefones = telefones;
          }
          pps.push(pp);
        }
      });




    return pps;
  }


  private handleErrore(error: any): Promise<any> {
    console.error('Error', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }





}
