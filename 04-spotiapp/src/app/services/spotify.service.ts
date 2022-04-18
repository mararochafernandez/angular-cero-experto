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
        'Bearer BQCS8PcI1sNIv_1KxM6QleYsaBXOa44hpz1uMEO9xNp5fD_P1Yb6lumMWYpiNaea8JSHq-qXtb6-jId8NlQ',
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

  getArtists(term: string) {
    return this.getQuery(`search?q=${term}&type=artist&limit=15`).pipe(
      map((data: any) => data['artists'].items)
    );
  }

  getArtist(id: string) {
    return this.getQuery(`artists/${id}`) /*.pipe(
      map((data: any) => data['artists'].items)
    )*/;
  }
}
