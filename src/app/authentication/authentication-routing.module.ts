import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Login1Component } from './login-1/login-1.component';
import { ForgetPassComponent } from './forget-pass/forget-pass.component';

const routes: Routes = [
    {
        path: 'login',
        component: Login1Component,
        data: {
            title: 'Login'
        }
    },
    {
      path: 'forget-pass',
      component: ForgetPassComponent,
      data: {
          title: 'forget-pass'
      }
  }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class AuthenticationRoutingModule { }
