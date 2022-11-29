import { Component, OnInit } from '@angular/core';
import { Setores } from './setores.interface';
import { SetoresService } from './setores.service';

@Component({
  selector: 'setores',
  templateUrl: './setores.component.html',
  styleUrls: ['./setores.component.css'],
})
export class SetoresComponent implements OnInit {
  setores: Setores[] = [];
  constructor(private setoresService: SetoresService) {}

  ngOnInit(): void {
    this.list();
  }
  list() {
    this.setoresService.getSetores().subscribe(
      (setores) => {
        this.setores = setores;
      },
      (erro) => {
        console.log('Erro: ', erro);
      },
      () => {
        console.log('Terminou!');
      }
    );
  }

  remove(setores: Setores) {
    this.setoresService.remove(setores).subscribe(
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
