import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

export interface Datos { //objeto de clase usuario
  id: number;
  nombres: string;
  apellidos: string;
  region: string;
  comuna: string;
  articulos: string;
  genero: string;
  email: string;
  password: string;
  modified: number;
}

const ITEMS_KEY = 'my-datos';//Contendrá la clave de cada objeto

@Injectable({
  providedIn: 'root'
})
export class RegistroService {
  private _storage: Storage;

  constructor(private storage: Storage) {
    this.init();
  }

  //SE DEFINE EL MÉTODO STORAGE PARA ALMACENAR LA DATA
  async init() {
    const storage = await this.storage.create();
    // eslint-disable-next-line no-underscore-dangle
    this._storage = storage;
  }

  addDatos(dato: Datos): Promise<any>{
    return this.storage.get(ITEMS_KEY).then((datos: Datos[])=>{
       if (datos) {
         datos.push(dato);
         return this.storage.set(ITEMS_KEY, datos);
       }else {
         return this.storage.set(ITEMS_KEY, [dato]);
       }
     });
   }

    //Nos permmite obtener la información almacenada en el storage por medio de sus keys
    getDatos(): Promise<Datos[]>{
     return this.storage.get(ITEMS_KEY);
   }

   //ACTUALIZAR DATA
   updateDatos(dato: Datos): Promise<any>{
     return this.storage.get(ITEMS_KEY).then((datos: Datos[])=>{
       // eslint-disable-next-line eqeqeq
       if (!datos || datos.length == 0){
         return null;
       }
       // eslint-disable-next-line prefer-const
       let newDato: Datos[] = [];
       // eslint-disable-next-line prefer-const
       for (let i of datos){
         if (i.id === dato.id){
           newDato.push(dato);
         }
         else{
           newDato.push(i);
         }
       }
       return this.storage.set(ITEMS_KEY, newDato);
     });
   }

    //ELIMINAR DATA
   deleteDatos(id: number): Promise<Datos>{
     return this.storage.get(ITEMS_KEY).then((datos: Datos[])=>{
       if (!datos || datos.length === 0){
         return null;
       }
       // eslint-disable-next-line prefer-const
       let toKeep: Datos[] = [];
       // eslint-disable-next-line prefer-const
       for (let i of datos){
         if (i.id !== id){
           toKeep.push(i);
         }
       }
       return this.storage.set(ITEMS_KEY, toKeep);
     });
   }

}
