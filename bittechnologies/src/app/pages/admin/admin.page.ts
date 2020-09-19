import { Component, OnInit } from '@angular/core';
import { listShops } from '../../interfaces/interfaces';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})
export class AdminPage implements OnInit {

  listOfShops: listShops[] = [
    {
    id: 1,
    name: 'Tienda del norte',
    active: true,
    },
    {
    id: 2,
    name: 'Tienda del sur',
    active: true,
    },
    {
    id: 3,
    name: 'Tienda del centro',
    active: true,
    },
    {
    id: 4,
    name: 'Tienda del oeste',
    active: true,
    },
    {
    id: 5,
    name: 'Tienda nueva',
    active: false,
    },
];

  columns: any;


  constructor() { }

  ngOnInit() {

    this.columns = [
      { name: 'ID' },
      { name: 'Nombre' },
      { name: 'Activo' }
    ];
  }

}
