import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuncaoCadastroComponent } from './funcoes-cadastro.component';

describe('FuncaoCadastroComponent', () => {
  let component: FuncaoCadastroComponent;
  let fixture: ComponentFixture<FuncaoCadastroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FuncaoCadastroComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FuncaoCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
