import { HttpClient } from "@angular/common/http";
import { Injectable } from "../../../../node_modules/@angular/core";

@Injectable()
export class UserService{

constructor(private http:HttpClient){}
postUser(newUser){
   
    return this.http.post("http://localhost:3900/api/user",JSON.parse( newUser)).subscribe((data)=>{});
}
}