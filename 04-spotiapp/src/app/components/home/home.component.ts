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
  newReleases: any[] = [];
  loading: boolean;
  error: boolean = false;
  errorMessage: string = 'Error';

  constructor(private http: HttpClient, private spotify: SpotifyService) {
    /*
    this.http
      .get('https://restcountries.com/v2/lang/es')
      .subscribe((data: any) => {
        this.countries = data;
      });
    */

    this.loading = true;

    this.spotify.getNewReleases().subscribe(
      (data: any) => {
        this.newReleases = data;
        this.loading = false;
      },
      (serviceError) => {
        this.loading = false;
        this.error = true;
        this.errorMessage = serviceError.error.error.message;
      }
    );
  }
}
