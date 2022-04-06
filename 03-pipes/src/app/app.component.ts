import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name: string = 'Capitán América';
  myname: string = 'mARA rocha FERNÁNDEZ';
  numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  pi: number = Math.PI;
  percent: number = 0.234;
  salary: number = 1234.5;
  date: Date = new Date();
  active: boolean = true;

  language: string = 'es';
  videoURL: string = 'https://www.youtube.com/embed/bS71_W_BDFE';

  promiseValue = new Promise<string>((resolve) => {
    setTimeout(() => {
      resolve('Datos');
    }, 4500);
  });

  hero = {
    name: 'Logan',
    key: 'Wolverine',
    age: 500,
    address: {
      street: 'Primera',
      house: 20,
    },
  };
}
