import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
//servicio con el que logro enviar parametro saludo Bienvenido {{nombre}}
export class EjservicioService {
  private objectSource = new BehaviorSubject<{}>({});
  $getObjectSource = this.objectSource.asObservable();

  constructor() { }

  sendObjectSource(data:any){
    this.objectSource.next(data);
  }
}
