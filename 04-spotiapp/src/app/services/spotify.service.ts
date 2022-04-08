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
        'Bearer BQBUWTxznC1H77DYb32annTdGE5AnM3qzxbwCPQpBhOPuuHqut5aVA1H0FMVW20tY6vv6elssDAKSqawO58',
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

  getArtist(term: string) {
    const headers = new HttpHeaders({
      Authorization:
        'Bearer BQBUWTxznC1H77DYb32annTdGE5AnM3qzxbwCPQpBhOPuuHqut5aVA1H0FMVW20tY6vv6elssDAKSqawO58',
    });

    return this.http.get(
      `https://api.spotify.com/v1/search?q=${term}&type=artist&limit=15`,
      {
        headers,
      }
    );
  }
}
