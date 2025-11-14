import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn:'root'
})

export class HttpService{
    constructor(private http:HttpClient){}
    post(endPoint:string,body:any){
        return this.http.post(`http://127.0.0.1:5000/${endPoint}`,body);
    }

    get(endPoint:string,query:any){
        return this.http.get(`http://127.0.0.1:5000/${endPoint}?${query}`);
    }
}