import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/persona';
import { ApilaravelService } from '../../services/apilaravel.service';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})
export class PersonasComponent implements OnInit {
  personas : any;
  persona:Persona = {
    id: 0,
    nombres: '',
    apellidos: '',
    correo: '',
    telefono: '',
    direccion: ''
  }
  modoEditar =  false
  constructor( private service : ApilaravelService) { 
    this.personas = []
  }


  ngOnInit(): void {
    this.getPersonas()

  }

   getPersonas(){
     this.personas = []
    this.service.getPersonas().subscribe(data => {
      this.personas = data
    })

  }

  edit(persona){
    this.modoEditar = true;
    this.persona.id = persona.id;
    this.persona.nombres = persona.nombres;
    this.persona.apellidos = persona.apellidos;
    this.persona.correo = persona.correo;
    this.persona.telefono = persona.telefono;
    this.persona.direccion = persona.direccion;
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
    delete this.persona.id;
    console.log('persona',this.persona);
    this.service.addPerson(this.persona).subscribe(data=>{
      this.getPersonas()
      this.clear()
    })
  }

  update(){
    console.log(this.persona);
    this.service.updatePerson(this.persona).subscribe(data => {
      this.getPersonas();
      this.clear();
      
    })
  }

  clear(){
    this.modoEditar = false;
    this.persona.nombres = '';
    this.persona.apellidos = '';
    this.persona.correo = '';
    this.persona.telefono = '';
    this.persona.direccion = '';
  }
}
