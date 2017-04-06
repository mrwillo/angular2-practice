import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router'
import {Hero} from './hero';
import {HeroService} from './hero.service'


@Component({
    styleUrls: ['./heroes.component.css'],
    selector: 'my-heroes',
    templateUrl:'./heroes.component.html'
})

export class HeroesComponent implements OnInit {
    ngOnInit(): void {
        this.getHeroes();
    }

    title = 'Tour of Herros';
    heroes: Hero[];
    selectedHero: Hero;

    constructor(
        private heroService: HeroService,
        private router: Router
    ){}

    onSelect(hero: Hero): void {
        this.selectedHero = hero;
    };

    getHeroes(): void {
        this.heroService.getHeroes().then(heroes => this.heroes = heroes);
    }
    gotoDetail(): void {
        this.router.navigate(['/detail', this.selectedHero.id])
    }
}
