import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuncionarioRelacaoComponent } from './funcionario-relacao.component';

describe('FuncionarioRelacaoComponent', () => {
  let component: FuncionarioRelacaoComponent;
  let fixture: ComponentFixture<FuncionarioRelacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FuncionarioRelacaoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FuncionarioRelacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
