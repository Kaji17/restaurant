import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DemoThreeComponent } from './demo-three/demo-three.component';

const routes: Routes = [

    {
        path: '',
        component: DemoThreeComponent,
        data: {
            title: 'Dashboard',
        }
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class DashboardRoutingModule {

}
