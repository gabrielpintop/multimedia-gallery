import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClipsService {
  constructor(private http: HttpClient) {}

  getClips(multimedia) {
    console.log(multimedia.id);
    return new Promise((resolve, reject) => {
      const options = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
      };

      this.http
        .get(environment.requestBase + '/api/clips/' + multimedia.id, options)
        .subscribe(
          (data: any) => {
            resolve(data);
          },
          err => {
            console.log(err);
            reject('There was an error getting the clips');
          }
        );
    });
  }
}
