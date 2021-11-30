import { Component, OnInit, ViewChild } from '@angular/core';
import { RegistroService, Datos } from 'src/app/services/registro.service';
import { Platform, ToastController, IonList } from '@ionic/angular';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  /*usuario= { //objeto de clase usuario ANTES DE AGREGAR EL SERVICIO A REGISTRO
    nombres:'',
    apellidos:'',
    region:'',
    comuna:'',
    articulos:'',
    genero:'',
    email:'',
    password:''
  };*/

  formularioRegistro: FormGroup;

  datos: Datos[] = [];
  // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
  newDato: Datos = <Datos>{};

  // eslint-disable-next-line @typescript-eslint/member-ordering
  @ViewChild('myList')myList: IonList;


  constructor(private storageService: RegistroService,
    private plt: Platform, private toastController: ToastController) {
      this.plt.ready().then(()=>{
        this.loadDatos();
      });
    }

  ngOnInit() {
  }

  //get
  loadDatos(){
    this.storageService.getDatos().then(datos=>{
      this.datos=datos;
    });
  }

   //create
   addDatos(){
    this.newDato.modified = Date.now();
    this.newDato.id = Date.now();
    this.storageService.addDatos(this.newDato).then(dato=>{
      // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
      this.newDato = <Datos>{};
      this.showToast('Datos Agregados');
      this.loadDatos();
    });
  }

  //update
  updateDatos(dato: Datos){
    dato.nombres = `UPDATED: ${dato.nombres}`;
    dato.modified = Date.now();
    this.storageService.updateDatos(dato).then(item=>{
      this.showToast('Elemento actualizado');
      this.myList.closeSlidingItems();
      this.loadDatos();
    });
  }

  //delete
  deleteDatos(dato: Datos){
    this.storageService.deleteDatos(dato.id).then(item=>{
      this.showToast('Elemento eliminado');
      this.myList.closeSlidingItems();
      this.loadDatos();
    });
  }

  async showToast(msg){
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }

}