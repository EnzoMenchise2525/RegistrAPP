import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PasoParametroService } from 'src/app/services/paso-parametro.service';
import { Storage } from '@capacitor/storage';

@Component({
  selector: 'app-vista-alumno',
  templateUrl: './vista-alumno.page.html',
  styleUrls: ['./vista-alumno.page.scss'],
})
export class VistaAlumnoPage implements OnInit {


  user: any ;

  constructor(public router: Router, private pasoParametro: PasoParametroService) { }

  ngOnInit() {
    this.pasoParametro.$getObjectSource.subscribe(data => {
    console.log(data)
    this.user = data;
  }).unsubscribe();
  }

  logout(){
    Storage.remove({key:'user'});
    Storage.remove({key:'logueado'});
    this.router.navigate(['/login']);
    console.log('Se ha Cerrado Sesion')
  }

}
