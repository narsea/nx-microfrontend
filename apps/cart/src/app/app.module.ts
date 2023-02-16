import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { CartService } from '@nx-workspace/shared/data-access-user';
import { AppComponent } from './app.component';
import { CartListComponent } from './cart-list/cart-list.component';

@NgModule({
  declarations: [AppComponent, CartListComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      [
        {
          path: '',
          loadChildren: () =>
            import('./remote-entry/entry.module').then(
              (m) => m.RemoteEntryModule
            ),
        },
      ],
      { initialNavigation: 'enabledBlocking' }
    ),
  ],
  providers: [CartService],
  bootstrap: [AppComponent],
})
export class AppModule {}
