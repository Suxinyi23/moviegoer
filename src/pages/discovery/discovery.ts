import {
  IonicPage,
  LoadingController,
  ModalController,
  NavController,
  NavParams,
  ToastController,
  ViewController
} from "ionic-angular";
import {Component} from "@angular/core";
import {Storage} from "@ionic/storage";
import {HttpClient} from "@angular/common/http";
import {BaseUI} from "../../common/baseui";
import {Bmobconfig} from "../../common/getBmob";
import {AnswerPage} from "../answer/answer";
import {MomentPage} from "../moment/moment";
import {WritePage} from "../write/write";
import {MyMomentsPage} from "../my-moments/my-moments";

/**
 * Generated class for the MomentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-moment',
  templateUrl: 'discovery.html',
})
export class DiscoveryPage extends BaseUI{

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public modalCtrl: ModalController,
              public viewCtrl: ViewController,
              public loadingCtrl: LoadingController,
              public toastCtrl: ToastController,
              public storage: Storage,
              public http: HttpClient) {
    super();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MomentPage');
  }
  gotoMomentPage(){

    var Bmob = Bmobconfig.getBmob();
    var currentUser = Bmob.User.current();
    // console.log(currentUser);
    if (currentUser) {
      this.navCtrl.push(MomentPage);
    }
    else {
      super.showToast(this.toastCtrl, 'Please Login first...');
    }

  }
  gotoMyMomentPage(){
    var Bmob = Bmobconfig.getBmob();
    var currentUser = Bmob.User.current();
    // console.log(currentUser);
    if (currentUser) {
      this.navCtrl.push(MyMomentsPage);
    }
    else {
      super.showToast(this.toastCtrl, 'Please Login first...');
    }
  }
  gotoWritePage(){
    var Bmob = Bmobconfig.getBmob();
    var currentUser = Bmob.User.current();
    // console.log(currentUser);
    if (currentUser) {
      this.navCtrl.push(WritePage);
    }
    else {
      super.showToast(this.toastCtrl, 'Please Login first...');
    }
  }

}
