import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Location } from 'src/app/model/location';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit{
  
  /*oggetto di tipo location*/
  city?: Location /* inizializzato come vuoto */
  /*     Location fa riferimento a model > location.ts */

  /* importare il DataService:
  la lista può usare tutte le funzioni del DataService*/
  constructor(private dataServ: DataService) {}

  /*inizializzazione componente - la prima funzione che si attiva */
  /*chiamiamo la funzione scritta nel servizio*/

  ngOnInit():void{
    /*                                   data -> il dato che arriva - scope locale */
    this.dataServ.getWeather().subscribe(data =>{
      this.city = data; /*incolla*/
      // console.log('data', data);
      // console.log('this.city', this.city);
    })   
  }
  /*subscribe: faccio fare altre cose alla mia funzione */
}
