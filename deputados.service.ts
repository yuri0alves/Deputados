import { Injectable } from '@angular/core';
import { Deputado } from './deputado';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeputadosService {
  private API =  'https://dadosabertos.camara.leg.br/api/v2/deputados'

  private deputado: Deputado[] = []

  constructor(private http: HttpClient) { 
    
   }

   buscarDeputadoPorNome(nome: string): Observable<any> {
    return this.http.get<any>(`${this.API}?nome=${nome}&ordem=ASC&ordenarPor=nome`)
  }
}
