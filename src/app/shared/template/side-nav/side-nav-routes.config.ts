import {
  SideNavInterface
} from '../../interfaces/side-nav.type';

export const ROUTES: SideNavInterface[] = [{
  path: '/dashboard/demo-three',
  title: 'Dashboard',
  iconType: 'nzIcon',
  iconTheme: 'outline',
  icon: 'appstore-add',
  submenu: []
},
{
  path: '/menu/menu',
  title: 'Menu',
  iconType: 'nzIcon',
  iconTheme: 'outline',
  icon: 'layout',
  submenu: []
},
{
  path: '',
  title: 'Utilisateur',
  iconType: 'nzIcon',
  iconTheme: 'outline',
  icon: 'user',
  submenu: [
    {
      path: '/apps/chat',
      title: 'Client',
      iconType: '',
      icon: '',
      iconTheme: '',
      submenu: []
    },
    {
      path: '/apps/projects',
      title: 'Administrateur',
      iconType: '',
      icon: '',
      iconTheme: '',
      submenu: [
      ]
    },
  ]
},
{
  path: '',
  title: 'Commandes',
  iconType: 'nzIcon',
  iconTheme: 'outline',
  icon: 'shopping',
  submenu: [
  ]
},
]
