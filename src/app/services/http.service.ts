import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map } from 'rxjs/operators';
import { environment } from "../../environments/environment";

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

  public get(relativePath: string, data: any): any {
    
    // build request payload and headers
    const completePath: string = `${environment.Server}${relativePath}${this.getParams(data)}`;

    let headers = new HttpHeaders();
    headers = headers.set("Content-type", "application/json");
    try {
      return this.http.get(completePath)
      .pipe(map(res => {
        console.log('res', res)
      })).toPromise();

    }
    catch(err) {
      console.log('http err ', err)
    }
  }

}
