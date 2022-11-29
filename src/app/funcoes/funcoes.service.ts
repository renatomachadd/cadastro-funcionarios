import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Funcoes } from './funcoes.interface';

@Injectable({
  providedIn: 'root',
})
export class FuncoesService {
  constructor(private http: HttpClient) {}

  getFuncao(id: number): Observable<Funcoes> {
    return this.http.get<Funcoes>(`http://localhost:3000/funcoes/${id}`);
  }

  getFuncoes(): Observable<Funcoes[]> {
    return this.http.get<Funcoes[]>(`http://localhost:3000/funcoes`);
  }

  save(Funcoes: Funcoes): Observable<Funcoes> {
    return this.http.post<Funcoes>(`http://localhost:3000/funcoes`, Funcoes);
  }

  update(Funcoes: Funcoes): Observable<Funcoes> {
    return this.http.put<Funcoes>(
      `http://localhost:3000/funcoes/${Funcoes.id}`,
      Funcoes
    );
  }

  remove({ id }: Funcoes): Observable<void> {
    return this.http.delete<void>(`http://localhost:3000/funcoes/${id}`);
  }
}
