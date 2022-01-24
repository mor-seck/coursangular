import { Component, OnInit } from '@angular/core';
import { Hero } from '../heroes/hero';
import { HEROES } from './mock-heroes';

@Component({
  selector: 'app-mock-heroes',
  templateUrl: './mock-heroes.component.html',
  styleUrls: ['./mock-heroes.component.css']
})
export class MockHeroesComponent implements OnInit {
  heroes = HEROES;
  selectedHero?: Hero;

  constructor() { }

  ngOnInit(): void {
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

}
