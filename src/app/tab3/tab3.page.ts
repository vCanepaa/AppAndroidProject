import { Component } from '@angular/core';
import { Router } from '@angular/router';
import{Storage} from '@ionic/storage-angular';
import{Treino} from './treino'
@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  dia : string =''
  treinoDoDia: string =''
  exe1 :string =''
  exe2 :string =''
  exe3 :string =''
  exe4 :string =''
  exe5 :string =''
  mostrarForm: boolean = false;
  treinos: Treino[] =[];

  constructor(private router: Router,public storage:Storage) {
    this.init();
  }

  async init() {
    await this.storage.create();
    this.getTreino();
  }
  async limparBancoTreino() {
    await this.storage.remove('treinos');
    this.treinos = []; 
  } 
  

  async getTreino() {
    this.treinos = await this.storage.get('treinos') || [];
  }

  async adicionaTreino() {
    if (this.dia && this.treinoDoDia) {
      
  
      const novotreino = new Treino(this.dia, this.treinoDoDia, this.exe1, this.exe2, this.exe3, this.exe4, this.exe5);

      
  
      this.treinos.push(novotreino);
      await this.storage.set('treinos', this.treinos); 
      

      this.getTreino();
    }

    


    this.toggleForm1();
    
  }
  
  mostrarExercicios() {
    this.router.navigate(['/exercicios']);
  }
  async toggleForm1(){
    this.mostrarForm = !this.mostrarForm;
  }
}