import { Component, OnInit } from '@angular/core';
import { HeroesService, Hero } from '../../services/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
})
export class HeroesComponent implements OnInit {
  heroes: Hero[] = [];

  constructor(private heroesService: HeroesService, private router: Router) {}

  ngOnInit() {
    this.heroes = this.heroesService.getHeroes();
  }

  getHero(index: number) {
    this.router.navigate(['/hero', index]);
  }
}
