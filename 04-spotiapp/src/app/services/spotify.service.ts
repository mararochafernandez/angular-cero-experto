import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class SpotifyService {
  constructor(private http: HttpClient) {
    console.log('spotify service ready');
  }

  getNewReleases() {
    const headers = new HttpHeaders({
      Authorization:
        'Bearer BQBTp1WOMb5pvSKAniJr3IoaFLkaBxQFm7gr_hp95LI7689ozZClIRMBs22o3XWh3ZFYD2cc5QyrosIcb2w',
    });

    this.http
      .get('https://api.spotify.com/v1/browse/new-releases', { headers }) //?limit=5
      .subscribe((data) => {
        console.log(data);
      });
  }
}
