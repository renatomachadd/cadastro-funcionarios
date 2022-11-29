import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Funcionario } from './funcionarios.interface';

@Injectable({
  providedIn: 'root',
})
export class FuncionariosService {
  constructor(private http: HttpClient) {}

  getFuncionario(id: number): Observable<Funcionario> {
    return this.http.get<Funcionario>(
      `http://localhost:3000/funcionarios/${id}`
    );
  }

  getFuncionarios(): Observable<Funcionario[]> {
    return this.http.get<Funcionario[]>(`http://localhost:3000/funcionarios`);
  }

  save(Funcionario: Funcionario): Observable<Funcionario> {
    return this.http.post<Funcionario>(
      `http://localhost:3000/funcionarios`,
      Funcionario
    );
  }

  update(Funcionario: Funcionario): Observable<Funcionario> {
    return this.http.put<Funcionario>(
      `http://localhost:3000/funcionarios/${Funcionario.id}`,
      Funcionario
    );
  }

  remove({ id }: Funcionario): Observable<void> {
    return this.http.delete<void>(`http://localhost:3000/funcionarios/${id}`);
  }
}
