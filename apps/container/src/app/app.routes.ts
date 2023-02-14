import { NxWelcomeComponent } from './nx-welcome.component';
import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'cart',
    loadChildren: () => import('cart/Module').then((m) => m.RemoteEntryModule),
  },
  {
    path: 'product',
    loadChildren: () =>
      import('product/Module').then((m) => m.RemoteEntryModule),
  },
  {
    path: '',
    component: NxWelcomeComponent,
  },
];
