import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(private http: HttpClient) { }

  createReactiveForm(payload): Observable<any> {
    const headers = { 'Access-Control-Allow-Origin': '*, POST'  }
    const HttpOptions = { headers: new HttpHeaders(headers)}
    return this.http.post('https://reactive-form-34b0f-default-rtdb.firebaseio.com/', payload, HttpOptions);
  }  
}
