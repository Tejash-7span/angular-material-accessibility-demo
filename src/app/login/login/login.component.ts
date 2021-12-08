import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { DataShareService } from 'src/app/common/dataShare.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(private router: Router,
              private sharedSrvice: DataShareService) { }

  ngOnInit(): void {
    this.form.controls['username'].setValue('testusername');
    this.form.controls['password'].setValue('testpassword');
  }

  submit() {
    if (this.form.valid) {
      if(this.form.value.username == 'testusername' && this.form.value.password == 'testpassword' ) {
        let userDetail = {username: 'testusername', password: 'testpassword'};
        localStorage.setItem('currentUser', JSON.stringify(userDetail));
        this.sharedSrvice.reloadUserData(true);
        this.router.navigate(['home']);
      }
    }
  }
  redirectToHomePage() {
    this.router.navigate(['home']);
  }
}
