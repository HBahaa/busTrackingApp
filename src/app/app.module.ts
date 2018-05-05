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
import { IntroPage } from '../pages/intro/intro';
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
import { MapModalPage } from '../pages/map-modal/map-modal';


/**** cumuulocity ***/
import { PopoverComponent } from '../components/popover/popover';
import { AuthServiceProvider } from '../providers/auth-service/auth-service';
import { DataServiceProvider } from '../providers/data-service/data-service';

import { UserHomePage } from '../pages/cumulocity/home/home';
import { UserLoginPage } from '../pages/cumulocity/userlogin/userlogin';
import { DevicesPage } from '../pages/cumulocity/devices/devices';
import { DeviceDataPage } from '../pages/cumulocity/device-data/device-data';
import { ItemDataPage } from '../pages/cumulocity/item-data/item-data';

/** wialon **/
import { GetNotificationProvider } from '../providers/get-notification/get-notification';
import { GetChildrenProvider } from '../providers/get-children/get-children';
import { LoginProvider } from '../providers/login/login';
import { RegisterProvider } from '../providers/register/register';


import { DatePipe } from '../pipes/date/date'
import { ResetPasswordProvider } from '../providers/reset-password/reset-password';
import { EditProfileProvider } from '../providers/edit-profile/edit-profile';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    MyApp,
    IntroPage,
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
    MapModalPage,
    DatePipe,
    UserLoginPage,
    UserHomePage,
    DevicesPage,
    DeviceDataPage,
    ItemDataPage,
    PopoverComponent
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
    IntroPage,
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
    MapModalPage,
    UserLoginPage,
    UserHomePage,
    DevicesPage,
    DeviceDataPage,
    ItemDataPage
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
    RegisterProvider,
    ResetPasswordProvider,
    EditProfileProvider,
    AuthServiceProvider,
    DataServiceProvider
  ]
})
export class AppModule {}
