import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Keyboard } from '@ionic-native/keyboard';
import { HttpModule } from '@angular/http';
import { IonicStorageModule } from '@ionic/storage';
import { Geolocation } from '@ionic-native/geolocation';
import { GoogleMaps } from '@ionic-native/google-maps';
import { BackgroundMode } from '@ionic-native/background-mode';
import { LocalNotifications } from 'ionic-native';

import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { NotificationsPage } from '../pages/notifications/notifications';
import { NotificationPage } from '../pages/notification/notification';
import { ProfilePage } from '../pages/profile/profile';
import { DetailsPage } from '../pages/details/details';
import { ChildrenPage } from '../pages/children/children';
import { LoginPage } from '../pages/login/login';
import { Register1Page } from '../pages/register1/register1';
import { Register2Page } from '../pages/register2/register2';
import { MapPage } from '../pages/map/map';
import { GetNotificationProvider } from '../providers/get-notification/get-notification';
import { GetChildrenProvider } from '../providers/get-children/get-children';
import { LoginProvider } from '../providers/login/login';
import { RegisterProvider } from '../providers/register/register';

import { DatePipe } from '../pipes/date/date'

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, 'assets/i18n/', '.json');
}


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    NotificationsPage,
    NotificationPage,
    Register1Page,
    Register2Page,
    LoginPage,
    DetailsPage,
    ProfilePage,
    ChildrenPage,
    MapPage,
    DatePipe
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    IonicStorageModule.forRoot(),
    IonicModule.forRoot(MyApp, { scrollAssist: false, autoFocusAssist: false }),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }) 
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    NotificationsPage,
    NotificationPage,
    Register1Page,
    Register2Page,
    LoginPage,
    DetailsPage,
    ProfilePage,
    ChildrenPage,
    MapPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Keyboard,
    Geolocation,
    GoogleMaps,
    LocalNotifications,
    BackgroundMode,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    GetNotificationProvider,
    GetChildrenProvider,
    LoginProvider,
    RegisterProvider
  ]
})
export class AppModule {}
