import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

//Dichiaro che il servizio è iniettabile agli altri componenti a partire dal componente root
@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
   //url per oauth: https://developer.spotify.com/console/get-search-item/
  //Ottengo il modulo HttpClient
  constructor(private http: HttpClient) { }

  searchTrack(query: string) {
    const url = `https://api.spotify.com/v1/search?q=${query}&type=track`;
    const headers = new HttpHeaders({
      Authorization:
        'Bearer BQAXl1yx3aKiGf-ibOECqIS4WPoKEc_3Jdf7QhSNL7Qq6yTODvVmWEfGVJqZAM8r3_Dc6WK6T2f0B8T0DhW8rnt2YlA29AF3IqbsXw2E4Fr_AH2vWlpBgRiXNuiP1C5Dk7A-0NNMeaHFha5eV_c'
    });

    let obsTracks = this.http.get(url, { headers });
    return obsTracks;
 //Ritorno un observable ai componenti che richiedono il servizio
  }
}
