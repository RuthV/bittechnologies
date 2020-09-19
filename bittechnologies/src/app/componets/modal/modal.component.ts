import { Component, OnInit } from '@angular/core';
import { NavParams } from '@ionic/angular';
import { ServicesService } from '../../services/services.service';
import { Result } from '../../interfaces/interfaces';
import { ModalController } from '@ionic/angular';
import { ComponentsModule } from '../components.module';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  idComic: any;

  constructor(
    public navParams: NavParams, 
    private ServicesService: ServicesService, 
    private modalController: ModalController) {
     this.idComic = this.navParams.get('id');
   }

   comic: Result[] = [];
   urlImage = environment.imageDummy;
   personajes = false;

  ngOnInit() {
    this.comicByID();
  }


  comicByID(){
    let dataComic;
    this.ServicesService.getComicByID(this.idComic).subscribe(
      resp => {

          dataComic = resp;

          this.comic = dataComic.data.results[0];

          console.log(dataComic.data.results[0])

          if (dataComic.data.results[0].images.length !== 0){
            this.urlImage = dataComic.data.results[0].images[0].path + '.' + dataComic.data.results[0].images[0].extension;
          }


      });
  }

  salir(){
      this.modalController.dismiss();
  }

}
