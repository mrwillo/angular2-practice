/**
 * Created by willo on 4/6/17.
 */
import {Component, OnInit} from '@angular/core';
import {Hero} from './hero';
import {HeroService} from './hero.service'

@Component({
    styleUrls: ['./dashboard.component.css'],
    selector: 'my-dashboard',
    templateUrl: './dashboard.component.html'
})

export class DashboardComponent implements OnInit {
    heroes: Hero[] = [];

    constructor(private heroService: HeroService) {
    }

    ngOnInit(): void {
        this.heroService.getHeroes().then(heroes => this.heroes = heroes.splice(1, 5));
    }

}
