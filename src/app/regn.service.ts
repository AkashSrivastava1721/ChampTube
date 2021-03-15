import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class RegnService 
{
  constructor(private http: HttpClient) 
  { 

  }
  public register(data: any):Observable<any>
  {
    return this.http.post('https://champtube.herokuapp.com/signup',data);
  }
}
