import { Component } from '@angular/core';
import { NavController} from 'ionic-angular';

import { User } from '../../models/users';
import { GithubUser } from '../../providers/github-user';
import { UserDetailsPage } from '../user-details/user-details';

/*
  Generated class for the Users page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-users',
  templateUrl: 'users.html'
})
export class UsersPage {

  users : User[]

  constructor(public navCtrl: NavController, private githubUsers : GithubUser) {
    githubUsers.load().subscribe(users => {
      console.log("Users ----------->",users)
      this.users = users;
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UsersPage');
  }

   goToDetails(login: string) {
    this.navCtrl.push(UserDetailsPage, {login});
    }

}
