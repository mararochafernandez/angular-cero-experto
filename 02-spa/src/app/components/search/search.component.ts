import { Component, OnInit } from '@angular/core';
import { HeroesService, Hero } from '../../services/heroes.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
})
export class SearchComponent implements OnInit {
  heroes: Hero[] = [];
  term: string = '';

  constructor(
    private heroesService: HeroesService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    this.activatedRoute.params.subscribe((params) => {
      this.term = params['term'];
    });
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      this.term = params['term'];
      this.heroes = this.heroesService.searchHeroes(params['term']);
    });
  }

  seeHero(idx: number) {
    this.router.navigate(['/hero', idx]);
  }
}
