import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(private router: Router,private router2:Router, private router3:Router) {}

  calcularCalorias(){
    this.router2.navigate(['calorias'])
  }

  calcularIMC() {
    this.router.navigate(['imc']);
  }

  calcularAgua(){
    this.router.navigate(['agua'])
  }

  
}









