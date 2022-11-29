import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Funcionario } from '../funcionarios/funcionarios.interface';
import { FuncionariosService } from '../funcionarios/funcionarios.service';
import { FuncoesService } from '../funcoes/funcoes.service';
import { SetoresService } from '../setores/setores.service';

@Component({
  selector: 'funcionarios-cadastro',
  templateUrl: './funcionarios-cadastro.component.html',
  styleUrls: ['./funcionarios-cadastro.component.css'],
})
export class FuncionarioCadastroComponent implements OnInit {
  funcionarioForm: FormGroup = this.formBuilder.group({
    id: 0,
    matricula: [
      '',
      [Validators.required, Validators.minLength(5), Validators.maxLength(200)],
    ],
    nome: [
      '',
      [Validators.required, Validators.minLength(3), Validators.maxLength(200)],
    ],
    email: [
      '',
      [Validators.minLength(3), Validators.maxLength(150), Validators.required],
    ],
    cpf: 0,
    cargaHoraria: ['', [Validators.required]],
    dataNascimento: '2000-01-01',
    dataAdmissao: '2000-01-01',
    dataDemissao: '',
    funcao: ['', [Validators.required]],
    setor: ['', [Validators.required]],
  });

  funcaoOptions: Array<any> | undefined;

  setorOptions: Array<any> | undefined;

  constructor(
    private formBuilder: FormBuilder,
    private funcionariosService: FuncionariosService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private funcoesService: FuncoesService,
    private setoresService: SetoresService
  ) {}

  ngOnInit(): void {
    this.funcoesService.getFuncoes().subscribe((response) => {
      this.funcaoOptions = response;
    });
    this.setoresService.getSetores().subscribe((response) => {
      this.setorOptions = response;
    });
    const id = +this.activatedRoute.snapshot.params['id'];
    console.log(id);
    if (id) {
      this.funcionariosService.getFuncionario(id).subscribe(
        (funcionario) => {
          console.log(funcionario);
          this.funcionarioForm.patchValue(funcionario);
        },
        (erro) => {
          console.log('Erro: ', erro);
        }
      );
    }
  }

  onSubmit() {
    console.log(this.funcionarioForm.valid);
    console.log(this.funcionarioForm.value);

    const funcionario: Funcionario = this.funcionarioForm.value;

    if (funcionario.id) {
      this.funcionariosService
        .update(funcionario)
        .subscribe(() => this.redirect());
    } else {
      this.funcionariosService
        .save(funcionario)
        .subscribe(() => this.redirect());
    }
  }

  redirect() {
    this.router.navigate(['/funcionarios']);
  }
}
