import { Component } from '@angular/core';
import {
  AlertController,
  IonicPage,
  LoadingController,
  ModalController,
  NavController,
  NavParams, ToastController,
  ViewController
} from 'ionic-angular';
import {Storage} from "@ionic/storage";
import {HttpClient} from "@angular/common/http";
import {BaseUI} from "../../common/baseui";
import {Bmobconfig} from "../../common/getBmob";
import {AnswerPage} from "../answer/answer";
import {OneMomentPage} from "../one-moment/one-moment";
import {AddAnswerPage} from "../add-answer/add-answer";

/**
 * Generated class for the LikesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

// @IonicPage()
@Component({
  selector: 'page-likes',
  templateUrl: 'likes.html',
})
export class LikesPage extends BaseUI{

  feeds:any;
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public modalCtrl: ModalController,
              public viewCtrl: ViewController,
              public storage: Storage,
              private alertCtrl: AlertController,
              public loadingCtrl: LoadingController,
              public toastCtrl: ToastController,
              public http: HttpClient) {
    super();

  }

  // ionViewDidEnter(){
  //   console.log('ionViewDidLoad LikesPage');
  //   this.getlikes();
  //   console.log('feeds',this.feeds);
  // }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LikesPage');
    this.getlikes();
    console.log('feeds',this.feeds);
  }
  getlikes(){
    var Bmob = Bmobconfig.getBmob();
    this.storage.get('UserId').then(val=>{
      if(val!=null)
      {
        console.log('here', val);
        var query = Bmob.Query('like');
        query.equalTo('moment_owner', "==", val);
        query.equalTo('owner', "!=", val);
        query.find().then(todo=>{
          this.feeds=todo.reverse();
          console.log('feeds',this.feeds);
          for (let i = 0; i < this.feeds.length; i++) {
            this.feeds[i]['index'] = i;
          }

        })
      }
      else {
        super.showToast(this.toastCtrl, 'Please Login first...');
      }
    })
  }

  set_read(like_id)
  {
    var Bmob = Bmobconfig.getBmob();
    var query = Bmob.Query('like');
    query.set('id', like_id);
    query.set('read', true);
    query.save();
  }
  gotoOneMomentPage(id, like_id){
    var Bmob = Bmobconfig.getBmob();
    this.set_read(like_id);
    var currentUser = Bmob.User.current();
    // console.log(currentUser);
    if (currentUser) {
      let modal = this.modalCtrl.create(OneMomentPage, { id: id });
      //关闭后的回调
      modal.onDidDismiss(() => {
        this.getlikes();
      });
      modal.present();

      // this.navCtrl.push(OneMomentPage, { id: id ,like_id: like_id});
    }
    else {
      super.showToast(this.toastCtrl, 'Please Login first...');
    }


  }

}
