import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Params } from '@angular/router';
import { ElementRef } from '@angular/core';
import { ViewChild } from '@angular/core';

import { Dept } from '../../models/Dept';
import { ServiceDepts } from '../../services/service.depts';

@Component(
{
  selector: 'app-edit.component',
  standalone: false,
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css',
})
export class EditComponent implements OnInit
{
  public numero!:number;
  public dept!:Dept;

  @ViewChild("cajaNumero") cajaNumero!:ElementRef;
  @ViewChild("cajaNombre") cajaNombre!:ElementRef;
  @ViewChild("cajaLocalidad") cajaLocalidad!:ElementRef;
  
  constructor(private _activeRoute:ActivatedRoute,
              private _service:ServiceDepts,
              private _router: Router){}

  ngOnInit(): void 
  {
    this._activeRoute.params.subscribe((params:Params)=>
    {
      this.numero = parseInt(params["numero"]);

      this._service.findDept(this.numero).then(response =>
      {
        console.log(response);
        this.dept = response;
      })
    })

  }

  editDept()
  {
    let numero = parseInt(this.cajaNumero.nativeElement.value);
    let nombre = this.cajaNombre.nativeElement.value;
    let localidad = this.cajaLocalidad.nativeElement.value

    this.dept = new Dept(numero, nombre, localidad);

    this._service.editDept(this.dept).then(response =>
    {
      console.log(response);
      this._router.navigate(["/depts"]);
    })
  }

}
