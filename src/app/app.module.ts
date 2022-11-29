import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import '@angular/common/locales/global/pt';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FuncionarioCadastroComponent } from './funcionarios-cadastro/funcionarios-cadastro.component';
import { SetorCadastroComponent } from './setores-cadastro/setores-cadastro.component';
import { FuncaoCadastroComponent } from './funcoes-cadastro/funcoes-cadastro.component';
import { Route, RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FuncionariosComponent } from './funcionarios/funcionarios.component';
import { SetoresComponent } from './setores/setores.component';
import { FuncoesComponent } from './funcoes/funcoes.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Route[] = [
  {
    path: 'funcionarios-cadastro',
    component: FuncionarioCadastroComponent,
  },
  {
    path: 'funcionarios',
    component: FuncionariosComponent,
  },
  {
    path: 'edicao-funcionario/:id',
    component: FuncionarioCadastroComponent,
  },
  {
    path: 'setores-cadastro',
    component: SetorCadastroComponent,
  },
  {
    path: 'setores',
    component: SetoresComponent,
  },
  {
    path: 'edicao-setores/:id',
    component: SetorCadastroComponent,
  },
  {
    path: 'funcoes-cadastro',
    component: FuncaoCadastroComponent,
  },
  {
    path: 'funcoes',
    component: FuncoesComponent,
  },
  {
    path: 'edicao-funcoes/:id',
    component: FuncaoCadastroComponent,
  },
  {
    path: '**',
    redirectTo: '/funcionarios',
    pathMatch: 'full',
  },
];

@NgModule({
  declarations: [
    AppComponent,
    FuncionarioCadastroComponent,
    SetorCadastroComponent,
    FuncaoCadastroComponent,
    FuncionariosComponent,
    SetoresComponent,
    FuncoesComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'pt' }],
  bootstrap: [AppComponent],
})
export class AppModule {}
