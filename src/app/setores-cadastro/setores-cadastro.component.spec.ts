import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetorCadastroComponent } from './setores-cadastro.component';

describe('SetorCadastroComponent', () => {
  let component: SetorCadastroComponent;
  let fixture: ComponentFixture<SetorCadastroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SetorCadastroComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SetorCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
