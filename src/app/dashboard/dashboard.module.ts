import { CommonModule, DatePipe, DecimalPipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FullCalendarModule } from '@fullcalendar/angular';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { NgApexchartsModule } from 'ng-apexcharts';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCalendarModule } from 'ng-zorro-antd/calendar';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzProgressModule } from 'ng-zorro-antd/progress';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzRateModule } from 'ng-zorro-antd/rate';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzTimelineModule } from 'ng-zorro-antd/timeline';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NgChartsModule } from 'ng2-charts';
import { PERFECT_SCROLLBAR_CONFIG, PerfectScrollbarConfigInterface, PerfectScrollbarModule } from 'ngx-om-perfect-scrollbar';

import { ActiveUserComponent } from '../container/dashboard/demoThree/activeUser.component';
import { MoneyEarningComponent } from '../container/dashboard/demoThree/moneyEarning.component';
import { OverviewListVerticalComponent } from '../container/dashboard/demoThree/overviewListVertical.component';
import { ProfitGrowthComponent } from '../container/dashboard/demoThree/profitGrowth.component';
import { RecentDealsComponent } from '../container/dashboard/demoThree/recentDeals.component';
import { SalesOverviewComponent } from '../container/dashboard/demoThree/salesOverview.component';
import { TopProductComponent } from '../container/dashboard/demoThree/topProduct.component';
import { ThemeConstantService } from '../shared/services/theme-constant.service';
import { SharedModule } from '../shared/shared.module';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DemoThreeComponent } from './demo-three/demo-three.component';


const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

const antdModule = [

    NzLayoutModule,
    NzButtonModule,
    NzCardModule,
    NzAvatarModule,
    NzRateModule,
    NzBadgeModule,
    NzProgressModule,
    NzRadioModule,
    NzTableModule,
    NzDropDownModule,
    NzTimelineModule,
    NzTabsModule,
    NzTagModule,
    NzListModule,
    NzCalendarModule,
    NzToolTipModule,
    NzCheckboxModule,
    NzBreadCrumbModule,
    NzGridModule,
    NzSkeletonModule,
    NzSpaceModule,
    NzFormModule,
    FormsModule,
    NzSelectModule,
    NzDatePickerModule,
    NzModalModule,
    NzInputModule,
    AngularSvgIconModule.forRoot(),
    NgChartsModule,
    NgApexchartsModule,
    PerfectScrollbarModule,
    FullCalendarModule,
    NzMessageModule
]

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        DashboardRoutingModule,
        ...antdModule
    ],
    exports: [

    ],
    declarations: [
        DemoThreeComponent,
        MoneyEarningComponent,
        ProfitGrowthComponent,
        OverviewListVerticalComponent,
        SalesOverviewComponent,
        TopProductComponent,
        RecentDealsComponent,
        ActiveUserComponent,
    ],
    providers: [
        ThemeConstantService,
        DatePipe,
        DecimalPipe,
        {
          provide: PERFECT_SCROLLBAR_CONFIG,
          useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
        }
    ],
})

export class DashboardModule {

 }
