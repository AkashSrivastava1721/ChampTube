import { Component, OnInit } from '@angular/core';
import {ChampService} from '../champ.service'
import { DomSanitizer, SafeResourceUrl, SafeUrl} from '@angular/platform-browser';
@Component({
  selector: 'app-g4',
  templateUrl: './g4.component.html',
  styleUrls: ['./g4.component.css']
})
export class G4Component implements OnInit {

  public apidata:Array<any>=[];
  u:any;
  constructor(private service:ChampService, private sanitizer: DomSanitizer) 
  { 
      this.u=this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/maNWl202vy4");
  }

  ngOnInit(): void 
  {
    this.service.getDatag4().subscribe(data => this.apidata = data)  
  }

}
