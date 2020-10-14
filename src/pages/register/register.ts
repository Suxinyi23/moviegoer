import { Component } from '@angular/core';
import {IonicPage, LoadingController, NavController, NavParams, ToastController, ViewController} from 'ionic-angular';
import {Bmobconfig} from "../../common/getBmob";
import {BaseUI} from "../../common/baseui";

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage extends BaseUI{
  public name:string;
  public mail:string;
  public phone:string;
  public password:string;
  public confirm:string;


  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public viewCtrl: ViewController,
              public loadingCtrl: LoadingController,
              public toastCtrl: ToastController) {
    super();
  }

  dismiss()
  {
    this.navCtrl.pop();
  }

  register()
  {
    var loading=super.showLoading(this.loadingCtrl, "Loading...")
    var bmob=Bmobconfig.getBmob();

    //前台验证表单数据的正确性
    if(!(/^1[34568]\d{9}$/.test(this.phone)))
    {
      loading.dismiss();
      super.showToast(this.toastCtrl, "wrong phone format!")
      return;
    }
    else
      if(this.password!=this.confirm)
    {
      loading.dismiss();
      super.showToast(this.toastCtrl, "the passwords don't match!")
      return;
    }
    else if(this.name=="" || this.name==null||this.password==""||this.password==null||this.mail==""||this.mail==null
        ||this.phone=="" || this.phone==null||this.confirm==""||this.confirm==null)
    {
      loading.dismiss();
      super.showToast(this.toastCtrl, "input necessary information first!")
      return;

    }
    else {
      let params = {
        username: this.name,
        password: this.password,
        email: this.mail,
        phone: this.phone,
        headimage:""
      };
      bmob.User.register(params).then(res => {
        console.log(res);
        loading.dismiss();
        super.showToast(this.toastCtrl, "register succeeded!");
        this.navCtrl.pop();
      }).catch(err => {
        loading.dismiss();
        console.log(err);
        super.showToast(this.toastCtrl, err['error']);
      });
    }

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

}
