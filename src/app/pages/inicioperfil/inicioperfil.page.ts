import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';
import { EjservicioService } from 'src/app/services/ejservicio.service';
import { InteractionService } from 'src/app/Services/interaction.service';


@Component({
  selector: 'app-inicioperfil',
  templateUrl: './inicioperfil.page.html',
  styleUrls: ['./inicioperfil.page.scss'],
})
export class InicioperfilPage implements OnInit {

  credenciales:any;

  
  constructor(private router:Router,private auth:AuthService, private ej:EjservicioService, private inter:InteractionService) { }
  //recibo objetsource bienvenido credencialews.correo
  ngOnInit() {
    this.ej.$getObjectSource.subscribe(data => { 
      console.log(data)
      this.credenciales = data;
    }).unsubscribe();

  }

  logout(){
    this.auth.logout();
    this.inter.presentToast('Sesion Finalizada');
    this.router.navigate(['/places'])
    ///limpio
    this.credenciales.correo = '';
    this.credenciales.password = '';
  } 

}
