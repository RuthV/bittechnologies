import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../../services/services.service';
import { Result } from '../../interfaces/interfaces';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.page.html',
  styleUrls: ['./shop.page.scss'],
})
export class ShopPage implements OnInit {

  comics: Result[] = [];

  constructor( private ServicesService: ServicesService ) { }

  ngOnInit() {

    let dataComics;

    this.ServicesService.getComics().subscribe(
      resp => {

      dataComics = resp;

      this.comics = dataComics.data.results;

      this.comics.sort(this.dynamicSort('title'));


      });

  }


  dynamicSort(property) {
    let sortOrder = 1;

    if(property[0] === "-") {
        sortOrder = -1;
        property = property.substr(1);
    }

    return function(a,b) {
        if (sortOrder === -1){
            return b[property].localeCompare(a[property]);
        }else{
            return a[property].localeCompare(b[property]);
        }
    };
  }

}
