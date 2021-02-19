import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {
  userObj;
  constructor(private us:UserService,private r:Router) { 
    
  }

  ngOnInit(): void {
    //get username from local storage
    let username=localStorage.getItem("username")
    this.userObj=this.us.getUser(username).subscribe(
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
    //console.log(this.userObj);
    //give userObj to user service
    this.us.setUpdateUser(this.userObj);
    //navigate to update profile component
    this.r.navigateByUrl("/userdashboard/updateprofile");
    
  }
}
