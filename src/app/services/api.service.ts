import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RespuestaContenidoApi } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getContenidoApi()
  {
    // eslint-disable-next-line max-len
    return this.http.get<RespuestaContenidoApi>//Aquí estoy llamando a la interfaz creada en el archivo interafaces.ts
    ('https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=e2MymBXVuRsR03lsetXHdNAIDrmCgHkU');
  }
}
