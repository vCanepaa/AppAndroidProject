export class Treino{
  dia : string;
  treinoDoDia: string;
  exe1 :string; 
  exe2 :string;
  exe3 :string;
  exe4 :string; 
  exe5 :string;


  constructor(
    dia ?: string,
    treinoDoDia?: string,
    exe1 ?:string, 
    exe2 ?:string,
    exe3 ?:string,
    exe4 ?:string, 
    exe5 ?:string

  ){
    this.dia = dia || '';
    this.treinoDoDia = treinoDoDia || '';
    this.exe1 = exe1 || '';
    this.exe2 = exe2 || '';
    this.exe3 = exe3 || '';
    this.exe4 = exe4 || '';
    this.exe5 = exe5 || '';
  }
}