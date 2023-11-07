import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-imc',
  templateUrl: './imc.page.html',
  styleUrls: ['./imc.page.scss'],
})
export class IMCPage implements OnInit {
  peso: number = 0;
  altura: number = 0;
  imc : number = 0;


  constructor(private alertController: AlertController) { }
  async calcularIMC() {
    let alert;
    if (this.peso && this.altura) {
       this.imc = this.peso / (this.altura * this.altura);

       alert = await this.alertController.create({
        header: 'Seu IMC',
        message: `Seu IMC é: ${this.imc.toFixed(2)}`,
        buttons: ['OK']
      });

      
    } else {
       alert = await this.alertController.create({
        header: 'Erro',
        message: 'Por favor, insira peso e altura.',
        buttons: ['OK']
      });

    }
    await alert.present();
  }


  ngOnInit() {
  }

}
