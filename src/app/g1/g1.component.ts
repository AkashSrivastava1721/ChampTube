import { Component, OnInit } from '@angular/core';
import {ChampService} from '../champ.service'
import { DomSanitizer, SafeResourceUrl, SafeUrl} from '@angular/platform-browser';
@Component({
  selector: 'app-g1',
  templateUrl: './g1.component.html',
  styleUrls: ['./g1.component.css']
})
export class G1Component implements OnInit {

  public apidata:Array<any>=[];
  u:any;
  constructor(private service:ChampService, private sanitizer: DomSanitizer) 
  { 
      this.u=this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/maNWl202vy4");
  }

  ngOnInit(): void 
  {
    this.service.getDatag1().subscribe(data => this.apidata = data)  
  }

}
