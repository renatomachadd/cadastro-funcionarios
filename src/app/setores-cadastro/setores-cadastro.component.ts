import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Setores } from '../setores/setores.interface';
import { SetoresService } from '../setores/setores.service';

@Component({
  selector: 'setores-cadastro',
  templateUrl: './setores-cadastro.component.html',
  styleUrls: ['./setores-cadastro.component.css'],
})
export class SetorCadastroComponent implements OnInit {
  setorForm: FormGroup = this.formBuilder.group({
    id: 0,
    nome: [
      '',
      [Validators.required, Validators.minLength(1), Validators.maxLength(200)],
    ],
    descricao: [
      '',
      [Validators.required, Validators.minLength(3), Validators.maxLength(300)],
    ],
    supervisor: [
      '',
      [Validators.required, Validators.minLength(3), Validators.maxLength(100)],
    ],
    local: [
      '',
      [Validators.required, Validators.minLength(3), Validators.maxLength(100)],
    ],
    especialidade: [
      '',
      [Validators.required, Validators.minLength(3), Validators.maxLength(100)],
    ],
  });

  constructor(
    private formBuilder: FormBuilder,
    private setoresService: SetoresService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = +this.activatedRoute.snapshot.params['id'];
    console.log(id);
    if (id) {
      this.setoresService.getSetor(id).subscribe(
        (setor) => {
          console.log(setor);
          this.setorForm.patchValue(setor);
        },
        (erro) => {
          console.log('Erro: ', erro);
        }
      );
    }
  }

  onSubmit() {
    console.log(this.setorForm.valid);
    console.log(this.setorForm.value);

    const setor: Setores = this.setorForm.value;

    if (setor.id) {
      this.setoresService.update(setor).subscribe(() => this.redirect());
    } else {
      this.setoresService.save(setor).subscribe(() => this.redirect());
    }
  }

  redirect() {
    this.router.navigate(['/setores']);
  }
}
