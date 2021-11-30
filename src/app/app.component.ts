import { Component } from '@angular/core';

interface Componente{
  icon: string;
  name: string;
  redirecTo: string;
}

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() {}

  // eslint-disable-next-line @typescript-eslint/member-ordering
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
}
