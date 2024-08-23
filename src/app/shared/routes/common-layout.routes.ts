import { Routes } from '@angular/router';
import { ComponentsComponent } from '../../components/components.component'

export const CommonLayout_ROUTES: Routes = [

  //Dashboard
  {
    path: 'dashboard',
    children:
      [{
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
      },
      {
        path: '',
        loadChildren: () => import('../../dashboard/dashboard.module').then(m => m.DashboardModule),
      },]
  },

  // Charts
  {
    path: 'menu',
    children: [
      {
        path: '',
        redirectTo: '/menu',
        pathMatch: 'full'
      },
      {
        path: '',
        loadChildren: () => import('../../menu/menu.module').then(m => m.MenuModule)
      },
    ]
  },

  //Apps
  {
    path: 'apps',
    data: {
      title: 'Apps'
    },
    children: [
      {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
      },
      {
        path: '',
        loadChildren: () => import('../../apps/apps.module').then(m => m.AppsModule)
      },
    ]
  },

  //Component
  {
    path: 'demo',
    component: ComponentsComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('../../components/components.module').then(m => m.ComponentsModule)
      }
    ],
    data: {
      title: 'Components '
    }
  },
  //Pages
  {
    path: 'pages',
    data: {
      title: 'Pages '
    },
    children: [
      {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
      },
      {
        path: '',
        loadChildren: () => import('../../pages/pages.module').then(m => m.PagesModule)
      },
    ]
  }
];
