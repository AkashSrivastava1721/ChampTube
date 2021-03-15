import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UpserveService } from '../upserve.service';
import {Router} from '@angular/router'
@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {

  formGroup: FormGroup|any;

  constructor(private uservice:UpserveService, private router:Router) { }

  ngOnInit(): void 
  {
    this.initForm();
  }

  initForm()
  {
    this.formGroup = new FormGroup(
      {
        Email: new FormControl('',[Validators.required]),
        Title: new FormControl('',[Validators.required]),
        Description: new FormControl('',[Validators.required]),
        Gender: new FormControl('',[Validators.required]),
        Hashtag: new FormControl('',[Validators.required]),
        Link: new FormControl('',[Validators.required]),
      }
    )
  }

  loginProcess()
  {
    if(this.formGroup.valid)
    {
      this.uservice.upload(this.formGroup.value).subscribe((res: any)=>
        {
          console.log(res);
            this.router.navigate(['/home']);
            alert("uploaded");
      })
    }
  }
}

