import { Component, OnInit } from '@angular/core';
import { HeroesService, Hero } from '../../services/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
})
export class HeroesComponent implements OnInit {
  heroes: Hero[] = [];

  constructor(private heroesService: HeroesService, private router: Router) {
    //console.log('constructor');
  }

  ngOnInit() {
    this.heroes = this.heroesService.getHeroes();
    //console.log(this.heroes);
  }

  seeHeroe(idx: number) {
    this.router.navigate(['/heroe', idx]);
  }
}
