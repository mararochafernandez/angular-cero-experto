import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [],
})
export class HomeComponent {
  countries: any[] = [];

  constructor(private http: HttpClient, private spotify: SpotifyService) {
    this.http
      .get('https://restcountries.com/v2/lang/es')
      .subscribe((data: any) => {
        this.countries = data;
      });

    this.spotify.getNewReleases();
  }
}
