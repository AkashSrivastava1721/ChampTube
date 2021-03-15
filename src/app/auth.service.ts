import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs/internal/Observable';
@Injectable({
  providedIn: 'root'
})
export class AuthService 
{

  constructor(private http: HttpClient) 
  {
    
  }

  public login(data: any):Observable<any>
  {
    return this.http.post('https://champtube.herokuapp.com/signin',data);
  }
}
