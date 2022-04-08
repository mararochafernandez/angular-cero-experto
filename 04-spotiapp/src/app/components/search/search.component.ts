import { Component } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [],
})
export class SearchComponent {
  artists: any[] = [];

  constructor(private spotify: SpotifyService) {}

  search(term: string) {
    this.spotify.getArtist(term).subscribe((data: any) => {
      console.log(data.artists.items);

      this.artists = data.artists.items;
    });
  }
}
