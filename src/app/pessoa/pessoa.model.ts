import { Telefone } from './telefone.model';
import { ArrayType } from '@angular/compiler/src/output/output_ast';


export class Pessoa{
    id: number;
    nome: string;
    cpf: string;
    dataDeNascimento: Date;
    email: string;
    telefones: Telefone[] ;
}