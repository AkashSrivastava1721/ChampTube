import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class UpserveService 
{

  constructor(private http: HttpClient) { }

  public upload(data: any):Observable<any>
  {
    return this.http.post('https://champtube.herokuapp.com/uploadvideo',data);
  }
}
