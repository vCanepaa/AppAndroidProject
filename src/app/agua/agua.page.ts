import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-agua',
  templateUrl: './agua.page.html',
  styleUrls: ['./agua.page.scss'],
})
export class AguaPage implements OnInit {
  pesoCorporal: number = 0
  aguaPorDia: number = 0
  constructor(private alertController3: AlertController) { }

  async calcularAgua(){
    let alert;
    if(this.pesoCorporal){
      this.aguaPorDia = this.pesoCorporal * 35

      alert = await this.alertController3.create({
        header: 'Quantidade de água',
        message: `a quantidade de água ideal por dia é : ${this.aguaPorDia.toFixed(2)} ml.`,
        buttons: ['OK'],
        cssClass: 'my-custom-alert'
      });

    }else{alert = await this.alertController3.create({
        header: 'Erro',
        message: 'Por favor,insira seu peso corretamente',
        buttons: ['OK'],
        cssClass: 'my-custom-alert'
      });
    }
    await alert.present();
  } 

  ngOnInit() {
  }

}
