import { Component } from '@angular/core';
import { Refeicao } from './Refeicao';
import { formatNumber } from '@angular/common';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  horario:Date = new Date();
  nome: string = '';
  hora: string = '';
  desc: string = '';
  valorCal: number = 0;
  mostrarForm: boolean = false;
  refeicoes: Refeicao[] =[];
  

  constructor() {}

  async adicionaRefeicao(){
    if(this.nome && this.hora && this.desc  && this.valorCal){
    const horaTemp = this.hora.split(":");
    this.horario.setHours(parseInt(horaTemp[0]));
    this.horario.setMinutes(parseInt(horaTemp[1]));

       
    const novaRefeicao = new Refeicao(this.horario,this.nome,this.valorCal,this.desc);
    this.refeicoes.push(novaRefeicao);
    }
    this.nome = '';
    this.desc = '';
    this.valorCal = 0;

    

    this.toggleForm();
  }
  async toggleForm(){
    this.mostrarForm = !this.mostrarForm;
  }

}
