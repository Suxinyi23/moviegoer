import { Component } from '@angular/core';
import {IonicPage, LoadingController, ModalController, NavController, NavParams, ToastController} from 'ionic-angular';
import {LoginPage} from "../login/login";
import {Bmobconfig} from "../../common/getBmob";
import { Storage} from "@ionic/storage";
import {BaseUI} from "../../common/baseui";
import {RestProvider} from "../../providers/rest/rest";
// import {HttpClient, HttpResponse} from '@angular/common/http';
import {HttpClient} from "@angular/common/http";
import { HttpClientModule } from '@angular/common/http';
import {HeadfacePage} from "../headface/headface";


/**
 * Generated class for the UserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

// @IonicPage()
@Component({
  selector: 'page-user',
  templateUrl: 'user.html',
})
export class UserPage extends BaseUI{
  headface:string;
  old_nickname:string;
  old_email:string;
  old_phone:string;

  nickname:any;
  email:string;
  phone:string;
  password:string;



  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public modalCtrl: ModalController,
              public storage: Storage,
              public loadingCtrl: LoadingController,
              public http:HttpClient,
              public toastCtrl: ToastController
              ) {
    super();

  }

  ionViewDidEnter() {
    this.loadUserPage();
  }

  // ionViewDidLoad() {
  //   this.loadUserPage();
  // }

  loadUserPage(){
    var Bmob = Bmobconfig.getBmob();

    this.storage.get('UserId').then(val=> {
      if (val != null) {
        var loading=super.showLoading(this.loadingCtrl, "Loading...")
        // console.log(val);
        var currentUser = Bmob.User.current();
        var query = Bmob.Query('_User');
        query.equalTo('objectId', "==", val);
        query.find().then(list => {
          console.log(list);
          if (list[0] != null&&list[0]['headimage']!=null) {
            console.log("show the headimage", list[0]['headimage']);
            var head = list[0]['headimage'];
            this.http.get(head,{responseType:  'arraybuffer'}).subscribe((ab) => {
              // var base64String = btoa(String.fromCharCode.apply(null, new Uint8Array(ab)));
              var base64String= btoa([].reduce.call(new Uint8Array(ab),function(p,c){return p+String.fromCharCode(c)},''))
              this.headface='data:image/jpeg;base64,'+base64String;
            });
          } else {
            console.log("headimage not found!");
            // console.log(list[0])
          }

        });
        this.nickname = currentUser['username'];
        const queryinfo = Bmob.Query("_User");
        queryinfo.equalTo('objectId', "==", val);
        queryinfo.find().then(res => {
          if (res[0]!= null) {
            this.nickname =res[0]['username']
            this.email = res[0]['email'];
            this.phone = res[0]['phone'];

            // console.log(res[0]);
          } else {
            console.log("email not found!");
            // console.log(res[0])
          }
        });
        loading.dismiss();
      }
    });

  }

  gotoHeadfacePage()
  {
    this.navCtrl.push(HeadfacePage);
  }

  changeInfo()
  {

    this.storage.get('UserId').then(objectId => {
      var Bmob = Bmobconfig.getBmob();
      //query oldinfo
      const queryinfo = Bmob.Query('_User');
      queryinfo.equalTo('objectId', "==", objectId);
      queryinfo.find().then(res => {
        if (res[0]!= null) {
          this.old_nickname =res[0]['username']
          this.old_email = res[0]['email'];
          this.old_phone = res[0]['phone'];
        } else {
          console.log("email not found!");
          console.log(res[0])
        }
      });

      const query = Bmob.Query('_User');
      console.log(objectId)
      query.get(objectId).then(res => {
      if(this.old_email!=this.email||this.old_phone!=this.phone||this.old_nickname!=this.nickname)
      {
        console.log(this.old_email, this.email)
        res.set('phone',this.phone);
        res.set('email', this.email);
        res.set('username', this.nickname);
        res.save();
        super.showToast(this.toastCtrl, "save succeeded!");
        this.navCtrl.pop();
      }
      else {
        super.showToast(this.toastCtrl, "no change!");
      }


      }).catch(err => {
        super.showToast(this.toastCtrl, "error in choosing a photo!");
        console.log(err)
      })

      }

    )


  }



}
