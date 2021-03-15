import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import {Router} from '@angular/router'

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit 
{
  formGroup: FormGroup|any;

  constructor(private authservice:AuthService, private router:Router) { }

  ngOnInit(): void 
  {
    this.initForm();
  }

  initForm()
  {
    this.formGroup = new FormGroup(
      {
        Email: new FormControl('',[Validators.required]),
        Passcode: new FormControl('',[Validators.required])
      }
    )
  }

  loginProcess()
  {
    if(this.formGroup.valid)
    {
      this.authservice.login(this.formGroup.value).subscribe(res=>
        {
          console.log(res);
          if(res.token)
          {
            this.router.navigate(['/optioncard']);
            alert("loggedIn");
          }
          else
          {
            alert("failed");
          }
      })
    }
  }
}
