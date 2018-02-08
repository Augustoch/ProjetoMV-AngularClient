import { ApproutingModule } from './app-routing.module';
import { ListagemComponent } from './listagem/listagem.component';
import { PessoaService } from './pessoa/pessoa.service';


import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Http, HttpModule } from '@angular/http';


import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { PessoaComponent } from './pessoa/pessoa.component';
import { RouterModule, Routes} from '@angular/router';
import { EditarPessoaComponent } from './pessoa/editar-pessoa/editar-pessoa.component';




@NgModule({
  declarations: [
    AppComponent,
    PessoaComponent,
    ListagemComponent,
    EditarPessoaComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    FormsModule,
    HttpClientModule,
    CommonModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    HttpModule,
    ApproutingModule

  ],
  exports: [BsDropdownModule, TooltipModule, ModalModule],
  providers: [
    PessoaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
