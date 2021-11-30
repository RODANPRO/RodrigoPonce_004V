import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Results } from 'src/app/interfaces/interfaces';
import { Book } from 'src/app/interfaces/interfaces';


@Component({
  selector: 'app-api',
  templateUrl: './api.page.html',
  styleUrls: ['./api.page.scss'],
})
export class ApiPage implements OnInit {

  api: Book[] = []; //Definimos un arreglo de tipo Results

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getContenidoApi().subscribe(resp=>{//Para acceder al método getContenidoApi
      console.log('api', resp.results);//Si agrego un punto despues de resp, puedo ver como despliega el contenido de la api.
      this.api.push(...resp.results.books);//El push sirve para añadir objeto por objeto en una lista
    });
  }

}
