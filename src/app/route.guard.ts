import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class RouteGuard implements CanActivate {
  canActivate():boolean{

    //check token in localStorage
    let token = localStorage.getItem("token");
    //if token is not found return false 
    if(token == undefined){
      alert("Unauthorised access")
      return false;
    }
    //else return true
    else{
    return true;
    }
  }
 
}
