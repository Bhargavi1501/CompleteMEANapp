import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userObj;
//inject Http client
  constructor(private hc:HttpClient) { }

  //user registration
  createUser(formData):Observable<any>{
    return this.hc.post("/user/register",formData);
  }
  
  loginUser(userCredObj):Observable<any>{
    return this.hc.post("/user/login",userCredObj);
  }
  getUser(username):Observable<any>{
    return this.hc.get("/user/getuser/"+username);
  }

  setUpdateUser(userObject){
    this.userObj = userObject;
  }
  getUpdateUser():object{
    return this.userObj;
  }
  updateUserObjectRequest(newUserObj):Observable<any>{
    return this.hc.put("/user/updateuser",newUserObj);
  }
}
