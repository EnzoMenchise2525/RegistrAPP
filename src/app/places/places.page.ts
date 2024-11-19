import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';
import { InteractionService } from 'src/app/Services/interaction.service';
import { EjservicioService } from '../services/ejservicio.service';



@Component({
  selector: 'app-places',
  templateUrl: './places.page.html',
  styleUrls: ['./places.page.scss'],
})
export class PlacesPage implements OnInit {

  signupView: boolean = false

  credenciales = {
    correo: "",
    password: ""
  }


  constructor(private ejservicio:EjservicioService ,private auth: AuthService, private interaction:InteractionService, private router:Router) { }

  ngOnInit() {
  }

  async login(){
    this.ejservicio.sendObjectSource(this.credenciales);
    await this.interaction.presentLoading('Ingresando...')
    console.log('credenciales ->', this.credenciales);
    const res = await this.auth.login(this.credenciales.correo,this.credenciales.password).catch( error => {
      console.log('error ');
      this.interaction.closeLoading();
      this.interaction.presentToast('Usuario o Contraseña Incorrecta')
    })
    if (res){
      console.log('res -> ',res);
      this.interaction.closeLoading();
      this.interaction.presentToast('Ingresado con exito')
      this.router.navigate(['/inicioperfil']);
    }
  }

}
