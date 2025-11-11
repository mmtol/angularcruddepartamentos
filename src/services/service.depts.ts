import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Dept } from "../models/Dept";
import { environment } from "../environments/environment.development";

@Injectable()
export class ServiceDepts
{
    constructor(private _http:HttpClient){}

    getDepts():Promise<any>
    {
        let url = environment.depts;
        let endPoint = "api/departamentos";
        let promise = new Promise((resolve) =>
        {
            this._http.get(url+endPoint).subscribe(response =>
            {
                resolve(response);
            })
        })
        
            return promise;
    }
}