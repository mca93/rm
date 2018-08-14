import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { OverdraftPage } from '../pages/overdraft/overdraft';
import { OverdraftService } from '../services/overdraft.service';
import { ItemDetailsPage } from '../pages/item-details/item-details';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    OverdraftPage,
    ItemDetailsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    OverdraftPage,
    ItemDetailsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    OverdraftService
  ]
})
export class AppModule {}
