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
import {OneMomentPage} from "../one-moment/one-moment";

/**
 * Generated class for the MessagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-message',
  templateUrl: 'message.html',
})
export class MessagePage extends BaseUI{

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
  ionViewDidLoad() {
    console.log('ionViewDidLoad MessagePage');
    this.getMessges();
    console.log(this.feeds);
  }

  getMessges(){
    var Bmob = Bmobconfig.getBmob();
    this.storage.get('UserId').then(val=>{
      if(val!=null)
      {
        console.log('here', val);
        var query = Bmob.Query('comment');
        query.equalTo('moment_owner', "==", val);
        query.equalTo('owner', "!=", val);
        query.find().then(todo=>{
          this.feeds=todo.reverse();
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


  gotoOneMomentPage0(id){
    var Bmob = Bmobconfig.getBmob();
    var currentUser = Bmob.User.current();
    console.log(currentUser);
    if (currentUser) {
      this.navCtrl.push(OneMomentPage, { id: id });
    }
    else {
      super.showToast(this.toastCtrl, 'Please Login first...');
    }
  }

  set_read(comment_id)
  {
    var Bmob = Bmobconfig.getBmob();
    var query = Bmob.Query('comment');
    query.set('id', comment_id);
    query.set('read', true);
    query.save();
  }
  gotoOneMomentPage(id, comment_id){
    var Bmob = Bmobconfig.getBmob();
    this.set_read(comment_id);
    var currentUser = Bmob.User.current();
    console.log(currentUser);
    if (currentUser) {
      let modal = this.modalCtrl.create(OneMomentPage, { id: id });
      //关闭后的回调
      modal.onDidDismiss(() => {
        this.getMessges();
      });
      modal.present();

      // this.navCtrl.push(OneMomentPage, { id: id ,like_id: like_id});
    }
    else {
      super.showToast(this.toastCtrl, 'Please Login first...');
    }


  }

}
