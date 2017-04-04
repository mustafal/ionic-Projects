import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { Page1 } from '../pages/page1/page1';
import { Page2 } from '../pages/page2/page2';
import { UsersPage } from '../pages/users/users';
import { ReposPage } from '../pages/repos/repos';
import { OrganizationsPage } from '../pages/organizations/organizations';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { GithubUser } from '../providers/github-user';
import { UserDetailsPage } from '../pages/user-details/user-details'

@NgModule({
  declarations: [
    MyApp,
    Page1,
    Page2,
    UsersPage,
    ReposPage,
    OrganizationsPage,
    UserDetailsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Page1,
    Page2,
    UsersPage,
    ReposPage,
    OrganizationsPage,
    UserDetailsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    GithubUser,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
