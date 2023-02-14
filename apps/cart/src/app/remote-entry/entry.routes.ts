import { Route } from '@angular/router';
import { CartListComponent } from '../cart-list/cart-list.component';
// import { RemoteEntryComponent } from './entry.component';

export const remoteRoutes: Route[] = [
  { path: '', component: CartListComponent },
];
