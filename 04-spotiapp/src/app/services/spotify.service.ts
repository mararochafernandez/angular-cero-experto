import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class SpotifyService {
  constructor(private http: HttpClient) {}

  getNewReleases() {
    const headers = new HttpHeaders({
      Authorization:
        'Bearer BQDUJAaDoJUuYyodTOi0V7qzlwqcrTb-iAbH9GMdLsLQ07H-W9xeXsN0AqMw-jZ6HD0GER5dce_H7Hs8Bks',
    });

    /*
    this.http
      .get('https://api.spotify.com/v1/browse/new-releases', { headers }) //?limit=5
      .subscribe((data) => {
        console.log(data);
      });
    */

    return this.http
      .get('https://api.spotify.com/v1/browse/new-releases', {
        headers,
      })
      .pipe(map((data: any) => data['albums'].items));
  }

  getArtist(term: string) {
    const headers = new HttpHeaders({
      Authorization:
        'Bearer BQDUJAaDoJUuYyodTOi0V7qzlwqcrTb-iAbH9GMdLsLQ07H-W9xeXsN0AqMw-jZ6HD0GER5dce_H7Hs8Bks',
    });

    return this.http
      .get(`https://api.spotify.com/v1/search?q=${term}&type=artist&limit=15`, {
        headers,
      })
      .pipe(map((data: any) => data['artists'].items));
  }
}
