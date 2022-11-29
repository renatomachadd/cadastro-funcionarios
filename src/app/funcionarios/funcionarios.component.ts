import { Component, OnInit } from '@angular/core';
import { Funcionario } from './funcionarios.interface';
import { FuncionariosService } from './funcionarios.service';

@Component({
  selector: 'funcionarios',
  templateUrl: './funcionarios.component.html',
  styleUrls: ['./funcionarios.component.css'],
})
export class FuncionariosComponent implements OnInit {
  funcionarios: Funcionario[] = [];
  constructor(private funcionariosService: FuncionariosService) {}

  ngOnInit(): void {
    this.list();
  }
  list() {
    this.funcionariosService.getFuncionarios().subscribe(
      (funcionarios) => {
        this.funcionarios = funcionarios;
      },
      (erro) => {
        console.log('Erro: ', erro);
      },
      () => {
        console.log('Terminou!');
      }
    );
  }

  remove(funcionario: Funcionario) {
    this.funcionariosService.remove(funcionario).subscribe(
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
