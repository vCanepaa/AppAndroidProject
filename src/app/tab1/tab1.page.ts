import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  peso: number = 0;
  altura: number = 0;

  constructor(private alertController: AlertController) {}

  async calcularIMC() {
    if (this.peso && this.altura) {
      const imc = this.peso / (this.altura * this.altura);

      const alert = await this.alertController.create({
        header: 'Seu IMC',
        message: `Seu IMC é: ${imc.toFixed(2)}`,
        buttons: ['OK']
      });

      await alert.present();
    } else {
      const alert = await this.alertController.create({
        header: 'Erro',
        message: 'Por favor, insira peso e altura.',
        buttons: ['OK']
      });

      await alert.present();
    }
  }
}









