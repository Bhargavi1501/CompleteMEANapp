import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-userdashboard',
  templateUrl: './userdashboard.component.html',
  styleUrls: ['./userdashboard.component.css']
})
export class UserdashboardComponent implements OnInit {

  username;
  userObj;
  constructor(private us:UserService,private r:Router) { }

  ngOnInit(): void {
    this.username = localStorage.getItem("username");
    this.userObj=this.us.getUser(this.username).subscribe(
      res=>{
        if(res["message"]=="success"){
          this.userObj=res["user"];
        }
        else{
          alert(res["message"]);
          //navigate to login
          this.r.navigateByUrl("/login");
        }
      },
      err=>{
        alert("Something went wrong")
        console.log(err)
      }
    )
    
  }
  updateProfile(){
    //console.log(this.u
  }
  

  logout(){

    //clear localstorege
    localStorage.clear();

    //Navigate to Home Component
    this.r.navigateByUrl("/home");
  }
}
