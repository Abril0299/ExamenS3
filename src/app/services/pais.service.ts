import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PaisService {
  constructor(private http:HttpClient) { }
  
 Buscar(pais:string){
    return this.http.get('http://universities.hipolabs.com/search?country='+pais);
  }

}
