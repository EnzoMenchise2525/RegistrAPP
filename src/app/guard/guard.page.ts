import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';


@Component({
  selector: 'app-guard',
  templateUrl: './guard.page.html',
  styleUrls: ['./guard.page.scss'],
})
export class GuardPage implements OnInit {

  constructor(
    public alertController: AlertController,
    public navCtrl: NavController) { }

  ngOnInit() {
  }

  async salir(){
    const alert= await this.alertController.create({
      header: 'Salir',
      message: '¿Desea Salir?',
      buttons: [
        {
          text : 'No gracias',
          handler: () => {

          }
        }, {
          text:'Si',
          handler: () => {
            localStorage.removeItem('ingresado');
            this.navCtrl.navigateRoot('places');
          }
        }
      ]
    });
    await alert.present();
  }

}
