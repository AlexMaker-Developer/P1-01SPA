import { Component, OnInit } from '@angular/core';
import {HeroesService} from '../../Services/Heroes.services';
import { Router } from '@angular/router';



@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
})
export class HeroesComponent implements OnInit {
  heroes: Heroe[] = [];
  constructor(private heroeServices: HeroesService,
              private router: Router) { }

  ngOnInit(): void {
    this.heroes = this.heroeServices.getHeroes();
  }

  verHeroe(i: number) {
    this.router.navigate(['/heroe',i]);
  }

}

interface Heroe{
  nombre: string;
  bio: string;
  img: string;
  aparicion: string;
  casa: string;
}
