import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RegnService } from '../regn.service';
import {Router} from '@angular/router'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  formGroup: FormGroup|any;

  constructor(private service:RegnService, private router:Router) { }

  ngOnInit(): void 
  {
    this.initForm();
  }

  initForm()
  {
    this.formGroup = new FormGroup(
      {
        Name: new FormControl('',[Validators.required]),
        Email: new FormControl('',[Validators.required]),
        Mobile: new FormControl('',[Validators.required]),
        Gender: new FormControl('',[Validators.required]),
        Age: new FormControl('',[Validators.required]),
        Passcode: new FormControl('',[Validators.required])

      }
    )
  }

  loginProcess()
  {
    if(this.formGroup.valid)
    {
      this.service.register(this.formGroup.value).subscribe((res:any)=>
        {
          console.log(res);
            this.router.navigate(['/signIn']);
            alert("signedup");
      })
    }
  }
}
