import { Component } from '@angular/core';
import {IonicPage, LoadingController, NavController, NavParams, ToastController, ViewController} from 'ionic-angular';
import { BaseUI } from "../../common/baseui";
import { Storage } from '@ionic/storage';
import {RestProvider} from "../../providers/rest/rest";
import { Bmobconfig } from "../../common/getBmob";

/**
 * Generated class for the QuestionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-question',
  templateUrl: 'question.html',
})
export class QuestionPage extends BaseUI{

  title: string;
  content: string;
  errorMessage: any;
  tags:string;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public viewCtrl: ViewController,
              public storage: Storage,
              public loadingCtrl: LoadingController,
              public rest: RestProvider,
              public toastCtrl: ToastController) {
    super();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QuestionPage');
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  submitQuestion() {
    if(this.title==null || this.content==null|| this.tags==null){
      this.showToast(this.toastCtrl,"Please input necessary information first!");
      return;
    }
    this.storage.get('UserId').then((val) => {
        console.log(val)
        var loading = super.showLoading(this.loadingCtrl, "Posting...");
        this.submitBack();
        loading.dismiss();
        this.dismiss();

    });
  }
  submitBack() {
    var bmob=Bmobconfig.getBmob();
    this.storage.get('UserId').then((val) => {
      if (val != null) {
        this.storage.get('UserName').then(name=>{
          var Ownerid = val;
          var Bmob = Bmobconfig.getBmob();
          const pointer1 = Bmob.Pointer('_User');
          const OwnerpoiID = pointer1.set(Ownerid);
          var question = Bmob.Query('post');
          var tag_list=this.tags.split(/[ ]+/);
          question.set('context', this.content);
          question.set('questioner_id', OwnerpoiID);
          question.set('title', this.title);
          question.set('tags', tag_list);
          question.set('answer_id_list', []);
          question.set('username', bmob.User.current()['username']);
          question.save();
        })




      }
    });
  }

}
