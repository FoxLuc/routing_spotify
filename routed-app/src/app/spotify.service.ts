import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

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
        'Bearer BQCaFfspVoIElcYXkrZEasVp4BLWZQJu232hK75X_hBmVa8o6Gjcg65xNjZOU7p5TXF82OuzP-yw_-cSqRS76lgHU6u2ja98ZGjMrnj-UcddNGzxMjfUocI0710D8MBhUHWMEQhMIFvBrZMjXN3W70yTZiHIq5I'
    });

    let obsTracks = this.http.get(url, { headers });
    return obsTracks;
 //Ritorno un observable ai componenti che richiedono il servizio
  }

  getTrack(id: string) {
    const url = `https://api.spotify.com/v1/tracks/${id}`;
    const headers = new HttpHeaders({Authorization: environment.oauthToken});

    return this.http.get(url, { headers });
  }
}
