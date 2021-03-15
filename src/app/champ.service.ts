import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import {Videos} from './videos'
import { DomSanitizer, SafeResourceUrl, SafeUrl} from '@angular/platform-browser';

@Injectable
({
  providedIn: 'root'
})
export class ChampService 
{
  private _url: string = "https://champtube.herokuapp.com/upload";
  private _dash: string = "https://champtube.herokuapp.com/userDashboard";
  private _g1: string = "https://champtube.herokuapp.com/g1";
  private _g2: string = "https://champtube.herokuapp.com/g2";
  private _g3: string = "https://champtube.herokuapp.com/g3";
  private _g4: string = "https://champtube.herokuapp.com/g4";
  private _g5: string = "https://champtube.herokuapp.com/g5";
  data:any=[];
  constructor(private http: HttpClient, private sanitizer: DomSanitizer) 
  {
    
  }
  getData():Observable<Videos[]>
  {
    this.data = this.http.get<Videos[]>(this._url);
    for(var i=0;i<this.data.length;i++)
    {
      this.data[i].Link=this.sanitizer.bypassSecurityTrustResourceUrl(this.data[i].Link);
    }
    return this.data;
  }
  getDatadash():Observable<any[]>
  {
    this.data = this.http.get<any[]>(this._dash);
    for(var i=0;i<this.data.length;i++)
    {
      this.data[i]=this.sanitizer.bypassSecurityTrustResourceUrl(this.data[i]);
    }
    return this.data;
  }
  getDatag1():Observable<any[]>
  {
    this.data = this.http.get<any[]>(this._g1);
    for(var i=0;i<this.data.length;i++)
    {
      this.data[i]=this.sanitizer.bypassSecurityTrustResourceUrl(this.data[i]);
    }
    return this.data;
  }
  getDatag2():Observable<any[]>
  {
    this.data = this.http.get<any[]>(this._g2);
    for(var i=0;i<this.data.length;i++)
    {
      this.data[i]=this.sanitizer.bypassSecurityTrustResourceUrl(this.data[i]);
    }
    return this.data;
  }
  getDatag3():Observable<any[]>
  {
    this.data = this.http.get<any[]>(this._g3);
    for(var i=0;i<this.data.length;i++)
    {
      this.data[i]=this.sanitizer.bypassSecurityTrustResourceUrl(this.data[i]);
    }
    return this.data;
  }
  getDatag4():Observable<any[]>
  {
    this.data = this.http.get<any[]>(this._g4);
    for(var i=0;i<this.data.length;i++)
    {
      this.data[i]=this.sanitizer.bypassSecurityTrustResourceUrl(this.data[i]);
    }
    return this.data;
  }
  getDatag5():Observable<any[]>
  {
    this.data = this.http.get<any[]>(this._g5);
    for(var i=0;i<this.data.length;i++)
    {
      this.data[i]=this.sanitizer.bypassSecurityTrustResourceUrl(this.data[i]);
    }
    return this.data;
  }
}
