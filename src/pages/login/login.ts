import { Component } from '@angular/core';
import {IonicPage, LoadingController, NavController, NavParams, ToastController, ViewController, ModalController} from 'ionic-angular';
import {BaseUI} from "../../common/baseui";
import { Bmobconfig} from "../../common/getBmob";
import { Storage} from "@ionic/storage";
import { RestProvider } from '../../providers/rest/rest';
import { RegisterPage} from "../register/register";
import {TabsPage} from "../tabs/tabs";
import {MorePage} from "../more/more";

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage extends BaseUI{

  name:string;
  password:string;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public viewCtrl: ViewController,
              public loadingCtrl: LoadingController,
              public toastCtrl:ToastController,
              public modalCtrl:ModalController,
              // public rest: RestProvider,
              public storage:Storage) {
    super();
  }

  login()
  {
    var loading=super.showLoading(this.loadingCtrl, "Loading...")
    var bmob=Bmobconfig.getBmob();
    if(this.name=="" || this.name==null||this.password==""||this.password==null)
      // if(this.name=="" || this.password=="")
    {
      loading.dismiss();
      super.showToast(this.toastCtrl, "input necessary information first!")
      return;

    }
    else {
      // console.log(typeof this.name);
      bmob.User.login(this.name, this.password).then(res => {
        console.log(res)
        //loading succeeded!
        this.storage.set('UserId', bmob.User.current()['objectId']);
        console.log('current',bmob.User.current())
        this.storage.set('UserName', bmob.User.current()['username']);
        loading.dismiss();
        // let tabs = this.modalCtrl.create(TabsPage);
        // tabs.present();
        this.dismiss();

      }).catch(err => {
        console.log(err);
        loading.dismiss();
        super.showToast(this.toastCtrl, err['error'])

      });
    }
  }

  register(){
    this.navCtrl.push(RegisterPage);

  }

  dismiss()
  {
    this.viewCtrl.dismiss();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
