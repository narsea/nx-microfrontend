import { Route } from '@angular/router';
import { ProductListComponent } from '../product-list/product-list.component';
// import { RemoteEntryComponent } from './entry.component';

export const remoteRoutes: Route[] = [
  { path: '', component: ProductListComponent },
];
