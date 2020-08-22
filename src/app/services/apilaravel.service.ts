import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Persona } from '../persona';

@Injectable({
  providedIn: 'root'
})
export class ApilaravelService {
  public URL : string = 'http://localhost:8000/api/personas/';
  personas : Persona[];
  constructor(private http:HttpClient) { }

  getPersonas(){
    return this.http.get<Persona>(this.URL);
  }

  getPersona(id){
    return this.http.get(this.URL+id)
  }

  addPerson(data:Persona){
    return this.http.post(this.URL,data)
  }


  updatePerson(data:Persona){
    return this.http.put(this.URL+data.id,data)
  }


  deletePerson(id){
    return this.http.delete(this.URL+id)
  }











  // addPerson(nombres,apellidos,correo,telefono,direccion){
  //   return this.http.post(this.URL,{
  //     nombres : nombres,
  //     apellidos : apellidos,
  //     correo : correo,
  //     telefono : telefono,
  //     direccion : direccion
  //   })
  // }
}
