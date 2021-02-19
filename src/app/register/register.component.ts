import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
 

  file:File;
  incomingfile(event){
    this.file = event.target.files[0];
  }
  constructor(private us:UserService,private r:Router) { }

  ngOnInit(): void {
  }
  onSubmit(ref){   
    let userObj = ref.value;

    let formData = new FormData();

    //adding image and other data to ForData object
    formData.append('photo',this.file,this.file.name);
 
    formData.append("userObj",JSON.stringify(userObj)) 
    //append() can only take the data in string format so convert the file datawhich is in binary to string
  

    this.us.createUser(formData).subscribe(
      res=>{
        if(res["message"] == "user existed"){
          alert("Username is already existed..choose another");
        }
        if(res["message"] == "user created"){
          alert("Registration succesfull");

          //navigate to login component
          this.r.navigateByUrl("/login");
        }
      },
      err=>{
        alert("Something went wrong in user creation");
        console.log(err);
      }  
    )
    console.log(ref.value);
}


}
/*export class User {
  public name: string;
  public email: string;
  public username: string;
  public password: string;
  public address:string;
  public city:string;
  public state:string;
}*/