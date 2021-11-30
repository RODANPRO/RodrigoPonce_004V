import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

interface Componente{
  icon: string;
  name: string;
  redirecTo: string;
}

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  componentes: Componente[] = [
    {
      icon:'information-outline',
      name:'Info',
      redirecTo: '/info'
    },
    {
      icon:'pencil-outline',
      name:'Registro',
      redirecTo: '/registro'
    },
    {
      icon:'book-outline',
      name:'Api',
      redirecTo: '/api'
    },
    {
      icon:'chevron-forward-circle-outline',
      name:'Login',
      redirecTo: '/login'
    },
  ];

  constructor(private menuController: MenuController) { }

  ngOnInit() {
  }

  mostrarMenu(){
    this.menuController.open('first');
  }

}
