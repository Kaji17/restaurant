import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { CarteComponent } from './carte/carte.component';
import { PlatComponent } from './plat/plat.component';

const routes: Routes = [
  {
    path: 'carte',
    component: CarteComponent,
    data:{
      title: 'Gestion Cartes'
    }
  },
  {
    path: 'plat',
    component: PlatComponent,
    data: {
      title: 'Gestion Plats'
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MenuRoutingModule { }
