import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },  {
    path: 'imc',
    loadChildren: () => import('./imc/imc.module').then( m => m.IMCPageModule)
  },
  {
    path: 'calorias',
    loadChildren: () => import('./calorias/calorias.module').then( m => m.CaloriasPageModule)
  },
  {
    path: 'exercicios',
    loadChildren: () => import('./exercicios/exercicios.module').then( m => m.ExerciciosPageModule)
  },
  {
    path: 'agua',
    loadChildren: () => import('./agua/agua.module').then( m => m.AguaPageModule)
  }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
