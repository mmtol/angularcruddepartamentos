import { Component, OnInit } from '@angular/core';
import { Dept } from '../../models/Dept';
import { ServiceDepts } from '../../services/service.depts';

@Component(
{
  selector: 'app-depts',
  standalone: false,
  templateUrl: './depts.component.html',
  styleUrl: './depts.component.css',
})
export class DeptsComponent implements OnInit
{
  public depts!:Array<Dept>;

  constructor(private _service:ServiceDepts){}

  ngOnInit(): void 
  {
      this.loadDepts();
  }

  loadDepts(): void
  {
    this._service.getDepts().then(response =>
    {
      this.depts = response;
    })
  }

  deleteDept(numero:number):void
  {
    this._service.deleteDept(numero).then(response =>
    {
      console.log(response);
      this.loadDepts();
    })
  }
}
