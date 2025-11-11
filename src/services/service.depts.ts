import { HttpClient } from "@angular/common/http";
import { HttpHeaders } from "@angular/common/http";
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

    createDept(dept:Dept):Promise<any>
    {
        let url = environment.depts;
        let endPoint = "api/departamentos";

        let data = JSON.stringify(dept);
        let header = new HttpHeaders();
        header = header.set("Content-type", "application/json");

        let promise = new Promise((resolve) =>
        {
            this._http.post(url+endPoint, data, {headers: header}).subscribe(response =>
            {
                resolve(response);
            })
        })

        return promise;
    }
}