import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor( private http: HttpClient) { }



  getComics() {
    try{

      return this.http.get(`https://gateway.marvel.com:443/v1/public/comics?ts=1&apikey=e0ff822bf9a2b56f671ebdbd594d426b&hash=e7b1633389293ca17ddf4c25e983a508`);

    }catch (err){
      console.log(err);
    }

  }


  getComicByID(idComic){
    try{

      return this.http.get(`https://gateway.marvel.com:443/v1/public/comics/${idComic}?apikey=e0ff822bf9a2b56f671ebdbd594d426b&hash=e7b1633389293ca17ddf4c25e983a508`);

    }catch (err){

      console.log(err);
    }

  }

}
