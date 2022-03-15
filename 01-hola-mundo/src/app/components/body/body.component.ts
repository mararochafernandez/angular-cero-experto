import { Component } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
})
export class BodyComponent {
  displayQuote: boolean = true;

  quote: any = {
    text: 'Un gran poder requiere una gran responsabilidad.',
    author: 'Ben Parquer',
  };

  characters: string[] = ['Spiderman', 'Venon', 'Dr. Octopus'];
}
