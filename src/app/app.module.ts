import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FuncionarioCadastroComponent } from './funcionario-cadastro/funcionario-cadastro.component';
import { FuncionarioRelacaoComponent } from './funcionario-relacao/funcionario-relacao.component';
import { SetorCadastroComponent } from './setor-cadastro/setor-cadastro.component';
import { FuncaoCadastroComponent } from './funcao-cadastro/funcao-cadastro.component';
import { Route, RouterModule } from '@angular/router';

const routes: Route[] = [
  {
    path: 'Funcionarios',
    component: FuncionarioCadastroComponent
  },
  {
    path: 'Setores',
    component: SetorCadastroComponent
  },
  {
    path: 'Funcoes/:id',
    component: FuncaoCadastroComponent
  },
]

@NgModule({
  declarations: [
    AppComponent,
    FuncionarioCadastroComponent,
    FuncionarioRelacaoComponent,
    SetorCadastroComponent,
    FuncaoCadastroComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }

