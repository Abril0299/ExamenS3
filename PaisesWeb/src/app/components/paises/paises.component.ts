import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Paises } from 'src/app/interface/pais';
import { PaisService } from 'src/app/services/pais.service';
import { HttpClient } from '@angular/common/http';
import { NgIf } from '@angular/common';
@Component({
  selector: 'app-paises',
  templateUrl: './paises.component.html',
  styleUrls: ['./paises.component.css']
})
export class PaisesComponent implements OnInit {

paisIngresado: string =''; 

  formulario = this.formBuilder.group({
    country:'',

  })

  constructor(private formBuilder: FormBuilder, private PaisService:PaisService){}
  pais_buscado: Paises[]=[];
  respuesta=false;
  ngOnInit(): void {
    
  }

  search(){
  this.paisIngresado=this.formulario.get('country')?.value;
  console.log(this.paisIngresado);
  this.PaisService.Buscar(this.paisIngresado).subscribe((res:any) =>{

    if (res ==''){
      console.log('esta vacio');
      this.respuesta=true;
    }

  this.pais_buscado=res;
  this.limpiarForms(); 

  
 


  });
  }

  limpiarForms() {
    this.formulario.reset();
  }
}
