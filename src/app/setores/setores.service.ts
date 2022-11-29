import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Setores } from './setores.interface';

@Injectable({
  providedIn: 'root',
})
export class SetoresService {
  constructor(private http: HttpClient) {}

  getSetor(id: number): Observable<Setores> {
    return this.http.get<Setores>(`http://localhost:3000/setores/${id}`);
  }

  getSetores(): Observable<Setores[]> {
    return this.http.get<Setores[]>(`http://localhost:3000/setores`);
  }

  save(Setores: Setores): Observable<Setores> {
    return this.http.post<Setores>(`http://localhost:3000/setores`, Setores);
  }

  update(Setores: Setores): Observable<Setores> {
    return this.http.put<Setores>(
      `http://localhost:3000/setores/${Setores.id}`,
      Setores
    );
  }

  remove({ id }: Setores): Observable<void> {
    return this.http.delete<void>(`http://localhost:3000/setores/${id}`);
  }
}
