import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/persona';
import { ApilaravelService } from '../../services/apilaravel.service';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})
export class PersonasComponent implements OnInit {
  personas : Persona[];
  persona:Persona;
  personn:Persona;
  modoEditar : false
  constructor( private service : ApilaravelService) { 
    this.personas = []
  }


  ngOnInit(): void {
    this.getPersonas()
  }

   getPersonas(){
     this.personas = []
    this.service.getPersonas().subscribe(data => {
      this.persona = data;
      this.personas.push(this.persona)
    })

  }



  deletePerson(id){
    var r = confirm("¿seguro que desea Eliminar?");
    if (r == true) {
      this.service.deletePerson(id).subscribe(data =>{
        console.log(data);
        this.getPersonas()
      })
    }


  }

  addPersona(){ 
    this.service.addPerson(this.persona).subscribe(data=>{
      console.log(data);
      this.getPersonas()
    })
  }

  update(){
    this.service.updatePerson(this.persona).subscribe(data => {
      console.log(data);
      this.getPersonas();
    })
  }
}
