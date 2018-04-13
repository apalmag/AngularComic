import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService, Heroe } from '../../servicios/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})
export class HeroeComponent {

  heroe: any = {};
  hogar: string;

  constructor(
    private activateRoute: ActivatedRoute,
    private _heroService: HeroesService) {

    this.activateRoute.params.subscribe(params => {
      this.heroe = this._heroService.obtenerHeroe(params['id']);
      console.log(this.heroe);
      if (this.heroe.casa === 'DC') {
        this.hogar = "assets/img/dc.jpeg";
      } else {
        this.hogar = "assets/img/marvel.jpeg";
      }
    });

  }

}
