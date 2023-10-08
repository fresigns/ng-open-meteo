import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, tap } from 'rxjs';
import { Location } from 'src/app/model/location';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  readonly BASE_URL = 'https://api.open-meteo.com/v1/forecast?';

  constructor(private http: HttpClient) {
    this.getWeather();
   }
  
  /*metodo, lo applico ad un osservabile di location*/
  getWeather():Observable<Location>{
    console.log('getWeather');   

    /*restituisce la fetch*/
    /*get<Location> è una promise */
    return this.http.get<Location>(this.BASE_URL+'latitude=44.4048&longitude=8.9444')
    // &hourly=temperature_2m,relativehumidity_2m,precipitation_probability,weathercode,cloudcover,windspeed_10m
    // ')
    .pipe(
      tap(data => console.log('locazione', data)),
      map(data => data) /*copia*/
      
    /*tap fa il console log*/
    /*map quando arriva il dato => ce l'ho */
    )}

    

}
