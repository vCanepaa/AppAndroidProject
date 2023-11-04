export class Refeicao{
    hora: Date;
    nome: string;
    valorCalorico: number;
    descricao: string;
    minFormat: string = '';
    horaFormat: string = '';
    constructor(
        hora: Date,
        nome?: string,
        valorCalorico?: number,
        descricao?: string
      ) {
        this.hora = hora;
        this.nome = nome || '';
        this.valorCalorico = valorCalorico || 0;
        this.descricao = descricao || '';
        this.minFormat = this.hora.getMinutes().toString().padStart(2,'0');
        this.horaFormat = this.hora.getHours().toString().padStart(2,'0');
      }

}