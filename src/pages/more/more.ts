import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, ModalController, LoadingController} from 'ionic-angular';
import { LoginPage} from "../login/login";
import { Storage} from "@ionic/storage";
import {BaseUI} from "../../common/baseui";
import {RestProvider} from "../../providers/rest/rest";
import { Bmobconfig} from "../../common/getBmob";
// import {HttpClient, HttpResponse} from '@angular/common/http';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import { HttpClientModule } from '@angular/common/http';
import {UserPage} from "../user/user";
/**
 * Generated class for the MorePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-more',
  templateUrl: 'more.html',
})
export class MorePage extends BaseUI{
  public loginStatus:boolean = false;
  public notLogin:boolean = true;
  headface:string;
  nickname:any;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public modalCtrl: ModalController,
              public storage: Storage,
              public loadingCtrl: LoadingController,
              public http:HttpClient) {
    super();
  }

  showModal(){
    let modal=this.modalCtrl.create(LoginPage);
    modal.onDidDismiss(()=>{
      this.loadUserPage();
    });
    modal.present();
  }

  ionViewDidEnter() {
    this.loadUserPage();
  }

  // ionViewDidLoad() {
  //   this.loadUserPage();
  // }

  loadUserPage(){
    var Bmob = Bmobconfig.getBmob();

    this.storage.get('UserId').then(val=>{
      if(val!=null)
      {
        // var loading=super.showLoading(this.loadingCtrl, "Loading...")
        this.loginStatus=true;
        this.notLogin=false;

        var currentUser = Bmob.User.current();
        var query = Bmob.Query('_User');
        query.equalTo('objectId', "==", val);

        query.find().then(list => {
          console.log(list[0]['headimage']);
          if(list[0]!=null && list[0]['headimage']!="" && list[0]['headimage']!=null)
          {

            var head = list[0]['headimage'];

            this.http.get(head,{responseType:  'arraybuffer'}).subscribe((ab) => {
              // var base64String = btoa(String.fromCharCode.apply(null, new Uint8Array(ab)));
              var base64String= btoa([].reduce.call(new Uint8Array(ab),function(p,c){return p+String.fromCharCode(c)},''))
              // var imgData='data:image/jpeg;base64,'+ base64String;
              this.headface='data:image/jpeg;base64,'+base64String;
            });
          }
          else
          {
            console.log("no headimage!")
            // console.log(list[0])
          }
        });
        this.nickname = currentUser['username'];
        // loading.dismiss();
      }
      else{
        this.loginStatus=false;
        this.notLogin=true;
      }
      });

  }

  gotoUserPage()
  {
    this.navCtrl.push(UserPage);
  }

  logout()
  {
    this.loginStatus=false;
    this.notLogin=true;
    this.storage.remove("UserId");
  }

}
