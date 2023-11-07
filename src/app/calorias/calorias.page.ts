import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-calorias',
  templateUrl: './calorias.page.html',
  styleUrls: ['./calorias.page.scss'],
})
export class CaloriasPage implements OnInit {

  carboidratos: number = 0
  proteinas: number = 0
  gorduras: number = 0
  caloriasTotal: number = 0

  constructor(private alertController2: AlertController) { }

  async calcularCalorias(){
    let alert;
    if(this.carboidratos || this.proteinas || this.gorduras){
      this.caloriasTotal = (this.carboidratos*4)+(this.proteinas*4)+(this.gorduras*9)

      alert = await this.alertController2.create({
        header: 'calorias Totais',
        message: `a quantidade de calorias é: ${this.caloriasTotal.toFixed(2)} kcal.`,
        buttons: ['OK']
      });

    }else{alert = await this.alertController2.create({
        header: 'Erro',
        message: 'Por favor,insira pelo menos um dos valores corretamente',
        buttons: ['OK']
      });
    }
    await alert.present();
  } 

  ngOnInit() {
  }

}





