import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Params } from '@angular/router';
import { Dept } from '../../models/Dept';

@Component(
{
  selector: 'app-details',
  standalone: false,
  templateUrl: './details.component.html',
  styleUrl: './details.component.css',
})
export class DetailsComponent implements OnInit
{
  public dept!: Dept;

  constructor(private _activeRoute: ActivatedRoute){}

  ngOnInit(): void 
  {
    this._activeRoute.params.subscribe((params:Params)=>
    {
      let numero = parseInt(params["numero"]);
      let nombre = params["nombre"];
      let localidad = params["localidad"];

      this.dept = new Dept(numero, nombre, localidad);
    })
  }
}
