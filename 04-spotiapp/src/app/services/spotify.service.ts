import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class SpotifyService {
  constructor(private http: HttpClient) {}

  getNewReleases() {
    const headers = new HttpHeaders({
      Authorization:
        'Bearer BQCXt443qN7HANFrcq5_YgpNm83jV4cjYB3TeAQWuEZf8KUiseqFQ-JlhMFI75mYBK6gQgbURdm5VhvWHWk',
    });

    /*
    this.http
      .get('https://api.spotify.com/v1/browse/new-releases', { headers }) //?limit=5
      .subscribe((data) => {
        console.log(data);
      });
    */

    return this.http.get('https://api.spotify.com/v1/browse/new-releases', {
      headers,
    });
  }
}
