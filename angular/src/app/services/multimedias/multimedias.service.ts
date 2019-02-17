import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MultimediasService {
  constructor(private http: HttpClient) {}

  getMultimedias() {
    return new Promise((resolve, reject) => {
      const options = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
      };

      this.http.get('http://localhost:8000/api/getMulti', options).subscribe(
        (data: any) => {
          resolve(data);
        },
        err => {
          reject('There was an error getting the multimedia files');
        }
      );
    });
  }
}
