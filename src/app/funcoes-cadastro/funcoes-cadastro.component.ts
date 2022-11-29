import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Funcoes } from '../funcoes/funcoes.interface';
import { FuncoesService } from '../funcoes/funcoes.service';

@Component({
  selector: 'funcoes-cadastro',
  templateUrl: './funcoes-cadastro.component.html',
  styleUrls: ['./funcoes-cadastro.component.css'],
})
export class FuncaoCadastroComponent implements OnInit {
  funcaoForm: FormGroup = this.formBuilder.group({
    id: 0,
    nome: [
      '',
      [Validators.required, Validators.minLength(1), Validators.maxLength(200)],
    ],
    descricao: [
      '',
      [Validators.required, Validators.minLength(3), Validators.maxLength(300)],
    ],
    salario: ['', [Validators.maxLength(150), Validators.required]],
    diasTrabalho: ['', [Validators.maxLength(150), Validators.required]],
    documentos: ['', [Validators.maxLength(150), Validators.required]],
  });

  constructor(
    private formBuilder: FormBuilder,
    private funcoesService: FuncoesService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = +this.activatedRoute.snapshot.params['id'];
    console.log(id);
    if (id) {
      this.funcoesService.getFuncao(id).subscribe(
        (funcao) => {
          console.log(funcao);
          this.funcaoForm.patchValue(funcao);
        },
        (erro) => {
          console.log('Erro: ', erro);
        }
      );
    }
  }

  onSubmit() {
    console.log(this.funcaoForm.valid);
    console.log(this.funcaoForm.value);

    const funcao: Funcoes = this.funcaoForm.value;

    if (funcao.id) {
      this.funcoesService.update(funcao).subscribe(() => this.redirect());
    } else {
      this.funcoesService.save(funcao).subscribe(() => this.redirect());
    }
  }

  redirect() {
    this.router.navigate(['/funcoes']);
  }
}
