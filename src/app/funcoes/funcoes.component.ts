import { Component, OnInit } from '@angular/core';
import { Funcoes } from './funcoes.interface';
import { FuncoesService } from './funcoes.service';

@Component({
  selector: 'funcoes',
  templateUrl: './funcoes.component.html',
  styleUrls: ['./funcoes.component.css'],
})
export class FuncoesComponent implements OnInit {
  funcoes: Funcoes[] = [];
  constructor(private funcoesService: FuncoesService) {}

  ngOnInit(): void {
    this.list();
  }
  list() {
    this.funcoesService.getFuncoes().subscribe(
      (funcoes) => {
        this.funcoes = funcoes;
      },
      (erro) => {
        console.log('Erro: ', erro);
      },
      () => {
        console.log('Terminou!');
      }
    );
  }

  remove(funcoes: Funcoes) {
    this.funcoesService.remove(funcoes).subscribe(
      () => this.list(),
      (erro) => {
        console.log('Erro: ', erro);
      },
      () => {
        console.log('Terminou!');
      }
    );
  }
}
