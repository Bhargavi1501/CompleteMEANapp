import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-updateprofile',
  templateUrl: './updateprofile.component.html',
  styleUrls: ['./updateprofile.component.css']
})
export class UpdateprofileComponent implements OnInit {
  userObj;
  constructor(private us: UserService) { }

  ngOnInit(): void {
    this.userObj = this.us.getUpdateUser();
    console.log(this.userObj);
  }

  editProfile() {
   
    this.us.updateUserObjectRequest(this.userObj).subscribe(
      res => {
        if (res["message"] == "success") {
          alert("Updated succesfull");
        }
      },
      err => {
        alert("Something went wrong in updating");
        console.log(err);
      }
    )
  }


}
