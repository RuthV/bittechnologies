import { Component } from '@angular/core';
import { pagesToDirect } from '../interfaces/interfaces';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  services: pagesToDirect[] = [
    {
      name: 'Administrador de tiendas',
      redirectTo: '/admin'
    },
    {
      name: 'Comics por tienda',
      redirectTo: '/shop'
    },
    {
      name: 'Listado de Comics',
      redirectTo: '/list'
    }

  ];

  constructor() {}

}



