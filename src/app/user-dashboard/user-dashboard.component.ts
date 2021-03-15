import { Component, OnInit } from '@angular/core';
import {ChampService} from '../champ.service'
import { DomSanitizer, SafeResourceUrl, SafeUrl} from '@angular/platform-browser';
@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {

  public apidata:Array<any>=[];
  u:any;
  constructor(private service:ChampService, private sanitizer: DomSanitizer) 
  { 
      this.u=this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/maNWl202vy4");
  }

  ngOnInit(): void 
  {
    this.service.getDatadash().subscribe(data => this.apidata = data)  
  }

}
