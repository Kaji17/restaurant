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

import { AppCalendarComponent } from '../container/dashboard/demoFive/calendar-mini';
import { DanialFullComponent } from '../container/dashboard/demoFive/danial.component';
import { EditModalComponent } from '../container/dashboard/demoFive/EditModalComponent';
import { MemberProgress } from '../container/dashboard/demoFive/member-progress';
import { MiniInboxComponent } from '../container/dashboard/demoFive/min-inbox';
import { UpcomingEvent } from '../container/dashboard/demoFive/upcoming-event';
import { UserOverviewComponent } from '../container/dashboard/demoFive/userOverview.component';
import { DanialComponent } from '../container/dashboard/demoFour/danial.component';
import { MarketingCampaignsComponent } from '../container/dashboard/demoFour/marketingCampaigns.component';
import { NewsComponent } from '../container/dashboard/demoFour/news.component';
import { PerformanceComponent } from '../container/dashboard/demoFour/performanceOverview.component';
import { ProfileCardComponent } from '../container/dashboard/demoFour/profileCard.component';
import { socialMediaTrafficComponent } from '../container/dashboard/demoFour/socialMediaTraffic.component';
import { TaskListComponent } from '../container/dashboard/demoFour/tasklist.component';
import { TeamListComponent } from '../container/dashboard/demoFour/teamMember.component';
import { userChatComponent } from '../container/dashboard/demoFour/userChat.component';
import { AppCalendarTwoComponent } from '../container/dashboard/demoNine/calendar-mini';
import { EditModalComponent2 } from '../container/dashboard/demoNine/EditModal2.component';
import { googleMapMiniComponent } from '../container/dashboard/demoNine/googleMap';
import { JohnComponent as JohnComponent } from '../container/dashboard/demoNine/John.component';
import { News2Component } from '../container/dashboard/demoNine/news2.component';
import { Performance2Component } from '../container/dashboard/demoNine/performanceOverview2.component';
import { socialMediaTrafficComponent2 } from '../container/dashboard/demoNine/socialMediaTraffic.Component';
import { TaskList2Component } from '../container/dashboard/demoNine/tasklist2.component';
import { TodoComponent2 } from '../container/dashboard/demoNine/todolist.component';
import { BrowserStatesComponent } from '../container/dashboard/demoOne/browserStates.component';
import { OverviewComponent } from '../container/dashboard/demoOne/overview.component';
import { SaleGrowthComponent } from '../container/dashboard/demoOne/salesGrowth.component';
import { SaleLocationComponent } from '../container/dashboard/demoOne/salesLocation.component';
import { SaleReportComponent } from '../container/dashboard/demoOne/salesReport.component';
import { TopSellingComponent } from '../container/dashboard/demoOne/topSelling.component';
import { OverviewSevenComponent } from '../container/dashboard/demoSeven/overview.component';
import { SourceRevenueTable } from '../container/dashboard/demoSeven/source-revenue';
import { OverviewSixComponent } from '../container/dashboard/demoSix/overviewSix.component';
import { SaleGrowthStatusComponent } from '../container/dashboard/demoSix/salesGrowthStatus.component';
import { SaleOverviewComponent } from '../container/dashboard/demoSix/salesOverview';
import { DanialFullComponent2 } from '../container/dashboard/demoTen/danial.component';
import { ActiveUserComponent } from '../container/dashboard/demoThree/activeUser.component';
import { MoneyEarningComponent } from '../container/dashboard/demoThree/moneyEarning.component';
import { OverviewListVerticalComponent } from '../container/dashboard/demoThree/overviewListVertical.component';
import { ProfitGrowthComponent } from '../container/dashboard/demoThree/profitGrowth.component';
import { RecentDealsComponent } from '../container/dashboard/demoThree/recentDeals.component';
import { SalesOverviewComponent } from '../container/dashboard/demoThree/salesOverview.component';
import { TopProductComponent } from '../container/dashboard/demoThree/topProduct.component';
import { BestSellerComponent } from '../container/dashboard/demoTwo/bestSeller.component';
import { NewProductComponent } from '../container/dashboard/demoTwo/newProduct.component';
import { OverviewListComponent } from '../container/dashboard/demoTwo/overviewList.component';
import { SaleRevenueComponent } from '../container/dashboard/demoTwo/salesRevenue.component';
import { SourceRevenueGenerated } from '../container/dashboard/demoTwo/sourceRevenueGenerated.component';
import { ThemeConstantService } from '../shared/services/theme-constant.service';
import { SharedModule } from '../shared/shared.module';
import { BlogCardsComponent } from './../container/dashboard/demoFive/blog-card';
import { KnowledgeBaseComponent } from './../container/dashboard/demoFive/knowledge-base.component';
import { TimeLineComponent } from './../container/dashboard/demoFive/timeline';
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
      SaleLocationComponent,
      BestSellerComponent,
      TopSellingComponent,
      BrowserStatesComponent,
      SaleReportComponent,
      SaleGrowthComponent,
      SaleRevenueComponent,
      SourceRevenueGenerated,
    ],
    declarations: [

        OverviewComponent,
        SaleReportComponent,
        SaleGrowthComponent,
        SaleLocationComponent,
        TopSellingComponent,
        BrowserStatesComponent,

        OverviewListComponent,
        SaleRevenueComponent,
        SourceRevenueGenerated,
        NewProductComponent,
        BestSellerComponent,
        DemoThreeComponent,
        MoneyEarningComponent,
        ProfitGrowthComponent,
        OverviewListVerticalComponent,
        SalesOverviewComponent,
        TopProductComponent,
        RecentDealsComponent,
        ActiveUserComponent,

        DanialComponent,
        PerformanceComponent,
        NewsComponent,
        TaskListComponent,
        MarketingCampaignsComponent,
        ProfileCardComponent,
        TeamListComponent,
        socialMediaTrafficComponent,
        userChatComponent,
        DanialFullComponent,
        DanialFullComponent2,
        UserOverviewComponent,
        AppCalendarComponent,
        MemberProgress,
        UpcomingEvent,
        EditModalComponent,
        KnowledgeBaseComponent,
        TimeLineComponent,
        MiniInboxComponent,
        BlogCardsComponent,
        OverviewSixComponent,
        SaleGrowthStatusComponent,
        SaleOverviewComponent,
        OverviewSevenComponent,
        SourceRevenueTable,
        JohnComponent,
        Performance2Component,
        News2Component,
        TaskList2Component,
        EditModalComponent2,
        TodoComponent2,
        socialMediaTrafficComponent2,
        googleMapMiniComponent,
        AppCalendarTwoComponent
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
