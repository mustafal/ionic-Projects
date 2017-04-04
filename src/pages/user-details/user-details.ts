import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { User } from '../../models/users';
import { GithubUser } from '../../providers/github-user'



/*
  Generated class for the UserDetails page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-user-details',
  templateUrl: 'user-details.html'
})
export class UserDetailsPage {
  
  login : string;
  user : User;

  constructor(public navCtrl: NavController, public navParams: NavParams, private githubUser:GithubUser) {
    this.login = navParams.get('login');
    
    githubUser.loadDetails(this.login).subscribe(user => {
      this.user = user;
      console.log(user)
    })
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserDetailsPage');
  }

}
