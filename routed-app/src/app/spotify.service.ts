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
    const url = 'https://api.spotify.com/v1/search?q=${query}&type=track';
    const headers = new HttpHeaders({
      Authorization:
        'Bearer BQDLWU3M_DIM6McKk6BN-r5AC2Qy4m5g3OxwhF-bB2ojqxIt7XhX1I9W-B0jxIKS_vMSGME4-uaQDkT2qYZINzgwKoMEh0Mu7QERiNB2FUt5_amwRjrRLkrITcYhfehvq1t1OLRkJoISdVyAP-o51gyqT7OF7bo'
    });

    let obsTracks = this.http.get(url, { headers });
    return obsTracks;
 //Ritorno un observable ai componenti che richiedono il servizio
  }
}
