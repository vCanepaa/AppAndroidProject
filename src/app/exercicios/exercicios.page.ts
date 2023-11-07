import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-exercicios',
  templateUrl: './exercicios.page.html',
  styleUrls: ['./exercicios.page.scss'],
})
export class ExerciciosPage implements OnInit {

  listaExercicios = [
  { nome: 'Supino reto barra',checked: false, videoUrl: 'https://www.youtube.com/watch?v=Kr2erpSyu3M' },
  { nome: 'Supino reto halteres',checked: false, videoUrl: 'https://www.youtube.com/watch?v=SWVO95XzxKg' },
  { nome: 'Crucifixo halteres',checked: false, videoUrl: 'https://www.youtube.com/watch?v=NB_1mCfIOLU' },
  { nome: 'Crucifixo maquina',checked: false, videoUrl: 'https://www.youtube.com/watch?v=oLFVune0qis' },
  { nome: 'Crossover',checked: false, videoUrl: 'https://www.youtube.com/watch?v=o90Pm6qTeNI' },
  { nome: 'Puxada aberta',checked: false, videoUrl: 'https://www.youtube.com/watch?v=Xn-fIQw08q4' },
  { nome: 'puxada supinada',checked: false, videoUrl: 'https://www.youtube.com/watch?v=uA3IrbUAVKA'},
  { nome: 'Puxafa com triangulo',checked: false, videoUrl: 'https://www.youtube.com/watch?v=093htCVTlOE' },
  { nome: 'Remada baixa',checked: false, videoUrl: 'https://www.youtube.com/watch?v=2YebbYuuBJQ' },
  { nome: 'Remada curvada barra',checked: false, videoUrl: 'https://www.youtube.com/watch?v=InPm_ic6Xng' },
  { nome: 'Remada unilateral',checked: false, videoUrl: 'https://www.youtube.com/watch?v=LhLDYH-ExbE' },
  { nome: 'Remada curvada supinada',checked: false, videoUrl: 'https://www.youtube.com/watch?v=vDueoUXlXOs' },
  { nome: 'Remada cavalinho',checked: false, videoUrl: 'https://www.youtube.com/watch?v=TRqQamJvKY8' },
  { nome: 'Encolhimento barra',checked: false, videoUrl: 'https://www.youtube.com/watch?v=BrwUPSLC_hE' },
  { nome: 'Agachamento barra',checked: false, videoUrl: 'https://www.youtube.com/watch?v=rM6SDUdl9fs' },
  { nome: 'Agachamento sumô',checked: false, videoUrl: 'https://www.youtube.com/watch?v=xjfaWj2W1eE' },
  { nome: 'Agahcamento smith',checked: false, videoUrl: 'https://www.youtube.com/watch?v=uCT5wfQIQpk' },
  { nome: 'Agachamento bulgaro',checked: false, videoUrl: 'https://www.youtube.com/watch?v=a3-bQbTdA_0' },
  { nome: 'Afundo',checked: false, videoUrl: 'https://www.youtube.com/watch?v=ALP9JIXA-PA' },
  { nome: 'Leg press 45',checked: false, videoUrl: 'https://www.youtube.com/watch?v=waAxlYvtCcI' },
  { nome: 'Hack machine',checked: false, videoUrl: 'https://www.youtube.com/watch?v=Whp712OHPl8' },
  { nome: 'Cadeira extensora',checked: false, videoUrl: 'https://www.youtube.com/watch?v=pJZXbaF-MCM' },
  { nome: 'Stiff',checked: false, videoUrl: 'https://www.youtube.com/watch?v=BHfY5-jGNDA' },
  { nome: 'Levantamento terra',checked: false, videoUrl: 'https://www.youtube.com/watch?v=QiqUXcz2iyA' },
  { nome: 'Cadeira flexora',checked: false, videoUrl: 'https://www.youtube.com/watch?v=xAjz_KacYI8' },
  { nome: 'Mesa flexora',checked: false, videoUrl: 'https://www.youtube.com/watch?v=8Nat6GRiEoc' },
  { nome: 'Cadeira adutora',checked: false, videoUrl: 'https://www.youtube.com/watch?v=goQVyEGMYMM' },
  { nome: 'cadeira Abdutora',checked: false, videoUrl: 'https://www.youtube.com/watch?v=50qHGus1TZk' },
  { nome: 'Elevação pelvica',checked: false, videoUrl: 'https://www.youtube.com/watch?v=E7iIqI8ldJ0' },
  { nome: 'Panturrilha sentadilha',checked: false, videoUrl: 'https://www.youtube.com/watch?v=Bx6elAOgxMI' },
  { nome: 'panturrilha em pé smith',checked: false, videoUrl: 'https://www.youtube.com/watch?v=Bfu6-o4QnOc' },
  { nome: 'Desenvolvimento halteres',checked: false, videoUrl: 'https://www.youtube.com/watch?v=L-iQfHVeuVg' },
  { nome: 'Elevação frontal',checked: false, videoUrl: 'https://www.youtube.com/watch?v=RUzWF4aDt7g' },
  { nome: 'Elevação frontal polia',checked: false, videoUrl: 'https://www.youtube.com/watch?v=1EfRZsp7dHg' },
  { nome: 'Elevação lateral',checked: false, videoUrl: 'https://www.youtube.com/watch?v=W5hRdgwEoEA' },
  { nome: 'Elevação lateral polia',checked: false, videoUrl: 'https://www.youtube.com/watch?v=kiGnl8yRwTw' },
  { nome: 'Crucifixo invertido',checked: false, videoUrl: 'https://www.youtube.com/watch?v=SNN6BftNts8' },
  { nome: 'Rosca direta',checked: false, videoUrl: 'https://www.youtube.com/watch?v=017j7Gbxipo' },
  { nome: 'Rosca alternada',checked: false, videoUrl: 'https://www.youtube.com/watch?v=ja45paikjpU' },
  { nome: 'Rosca scott',checked: false, videoUrl: 'https://www.youtube.com/watch?v=koCW9Uz-bpM' },
  { nome: 'Rosca concentrada',checked: false, videoUrl: 'https://www.youtube.com/watch?v=PcwdHVhWY3s' },
  { nome: 'Rosca martelo',checked: false, videoUrl: 'https://www.youtube.com/watch?v=5vPGH1uTtbs' },
  { nome: 'Rosca inversa',checked: false, videoUrl: 'https://www.youtube.com/watch?v=n1T66p6DF9I' },
  { nome: 'Triceps pulley',checked: false, videoUrl: 'https://www.youtube.com/watch?v=BI881NpBDHs' },
  { nome: 'Triceps pulley supinado',checked: false, videoUrl: 'https://www.youtube.com/watch?v=CAcBsklhPo8' },
  { nome: 'Triceps corda',checked: false, videoUrl: 'https://www.youtube.com/watch?v=gbnLZto6b0s' },
  { nome: 'Triceps testa',checked: false, videoUrl: 'https://www.youtube.com/watch?v=oqob5MHbzBc' },
  { nome: 'Triceps francês',checked: false, videoUrl: 'https://www.youtube.com/watch?v=_XIrAEnCqn8' },
  { nome: 'Abdominal supra ',checked: false, videoUrl: 'https://www.youtube.com/watch?v=mfkfUkj24co' },
  { nome: 'Abdominal supra polia',checked: false, videoUrl: 'https://www.youtube.com/watch?v=dX8C8jXF4kU' },
  { nome: 'Abdoninal infra',checked: false, videoUrl: 'https://www.youtube.com/watch?v=q12aZ8iBeo0' }
]
  


  constructor() { }

  toggleCheckbox(exercicio: { checked: boolean, nome: string, videoUrl: string }): void {
    exercicio.checked = !exercicio.checked;
  }

  verVideo(url: string) {
    window.open(url, '_system');
  }

  ngOnInit() {
  }

}
