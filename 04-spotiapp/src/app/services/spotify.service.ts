import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class SpotifyService {
  constructor(private http: HttpClient) {}

  getQuery(query: string) {
    const url = `https://api.spotify.com/v1/${query}`;

    const headers = new HttpHeaders({
      Authorization:
        'Bearer BQDA0-p6UMC0FYH8kwW7yYBhW6WwI3MQLIlD_lpGAjjbZIZpku1EzKGsEc1w6wD7dtuyxs2Sjol5LUPW1pM',
    });

    return this.http.get(url, { headers });
  }

  getNewReleases() {
    /*
    this.http
      .get('https://api.spotify.com/v1/browse/new-releases', { headers }) //?limit=5
      .subscribe((data) => {
        console.log(data);
      });
    */

    return this.getQuery('browse/new-releases?limit=20').pipe(
      map((data: any) => data['albums'].items)
    );
  }

  getArtist(term: string) {
    return this.getQuery(`search?q=${term}&type=artist&limit=15`).pipe(
      map((data: any) => data['artists'].items)
    );
  }
}
