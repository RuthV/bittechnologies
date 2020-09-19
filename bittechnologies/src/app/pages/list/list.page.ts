import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../../services/services.service';
import { Result } from '../../interfaces/interfaces';
import { ModalController } from '@ionic/angular';
import { ModalComponent } from '../../componets/modal/modal.component';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {
  comics: Result[] = [];
  urlImage = environment.imageDummy;
  dataComics;
  listComics = [];

  constructor( private ServicesService: ServicesService, private modalController: ModalController ) { }

  ngOnInit() {

    this.ServicesService.getComics().subscribe(
      resp => {

      this.dataComics = resp;

      console.log(this.dataComics.data.results)

      for (let i of this.dataComics.data.results){

        console.log(i.images)
        if (i.images.length === 0){

          this.listComics.push({
          id: i.id,
          title: i.title,
          url: this.urlImage
        });

        }else{

          this.listComics.push({
            id: i.id,
            title: i.title,
            url:  i.images[0].path + '.' + i.images[0].extension
          });
        }

      }

      });

  }


  async showModal(ev: any) {
    const modal = await this.modalController.create({
      component: ModalComponent,
      cssClass: 'my-custom-class',
      componentProps: { id: ev },
    });
    return await modal.present();
  }

}
