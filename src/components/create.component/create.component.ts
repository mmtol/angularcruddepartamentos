import { Component, ElementRef, ViewChild } from '@angular/core';
import { Dept } from '../../models/Dept';
import { ServiceDepts } from '../../services/service.depts';
import { Router } from '@angular/router';

@Component(
{
  selector: 'app-create.component',
  standalone: false,
  templateUrl: './create.component.html',
  styleUrl: './create.component.css',
})
export class CreateComponent 
{
  public dept!:Dept;

  @ViewChild("numero") numero:ElementRef;
  @ViewChild("nombre") nombre:ElementRef;
  @ViewChild("localidad") localidad:ElementRef;

  constructor(private _service:ServiceDepts,
              private _router:Router)
  {
    this.numero = new ElementRef(0);
    this.nombre = new ElementRef("");
    this.localidad = new ElementRef("");
  }

  createDept():void
  {
    let numero = parseInt(this.numero.nativeElement.value);
    let nombre = this.nombre.nativeElement.value;
    let localidad = this.localidad.nativeElement.value;

    this.dept = new Dept(numero, nombre, localidad);
    this._service.createDept(this.dept).then(response =>
    {
      console.log(response);
      this._router.navigate(["/depts"]);
    })
  }
}
