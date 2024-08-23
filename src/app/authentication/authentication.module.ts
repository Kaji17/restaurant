import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthenticationRoutingModule } from './authentication-routing.module';

import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';

import { AngularSvgIconModule } from 'angular-svg-icon';

import { Login1Component } from './login-1/login-1.component';
import { ForgetPassComponent } from './forget-pass/forget-pass.component';

const antdModule= [
    NzFormModule,
    NzInputModule,
    NzButtonModule,
    NzCardModule,
    NzCheckboxModule,
    AngularSvgIconModule.forRoot(),
]

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        ReactiveFormsModule,
        AuthenticationRoutingModule,
        ...antdModule
    ],
    declarations: [
        Login1Component,
        ForgetPassComponent
    ]
})

export class AuthenticationModule {}
