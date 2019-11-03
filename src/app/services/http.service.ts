import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map } from 'rxjs/operators';
import { environment } from "../../environments/environment";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) {}
 
  private getParams(data: any): string {
    if (data == null)
      return "";

    let paramsArr = [];

    for (let i in data) {
      if (!data.hasOwnProperty(i))
        continue;
      paramsArr.push(`${i}=${data[i]}`)
    }
    return "?" + paramsArr.join("&");
  }

  public get<T>(relativePath: string, id: any): Observable<any> {
    
    // build request payload and headers
     //const completePath: string = `${environment.Server}${relativePath}${this.getParams(data)}`;
    const completePath: string = `${environment.Server}${relativePath}/${id}`;

    let headers = new HttpHeaders();
    headers = headers.set("Content-type", "application/json");
    try {
      return this.http.get(completePath);

    }
    catch(err) {
      console.log('http err ', err);
    }
  }

  public post<T>(relativePath: string, data: any) {
    
    // build request payload and headers
    let completePath: string = `${environment.Server}${relativePath}`;
    let body: string = JSON.stringify(data);
    let headers = new HttpHeaders();
    headers = headers.set("Content-type", "application/json");

    try {
      return this.http.post(completePath, body, { headers })
        .pipe(
          map((res: any) => {
            console.log('res', res)
          }))
        .toPromise();
    } catch (err) {
      console.log('http err ', err)
    }
  }

}
