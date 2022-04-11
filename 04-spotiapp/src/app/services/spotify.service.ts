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
        'Bearer BQBjbSwtgVL8EGk_k6kU0pE2oEnFqkWkFxGTfqVzJJ4P6a2wM3KnAeVg2Dc2elTMjG9soDVZ9PJcz-z15F0',
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
