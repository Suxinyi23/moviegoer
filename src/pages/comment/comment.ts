import { Component } from '@angular/core';
import {IonicPage, LoadingController, NavController, NavParams, ToastController, ViewController} from 'ionic-angular';
import {Storage} from "@ionic/storage";
import {BaseUI} from "../../common/baseui";
import {Bmobconfig} from "../../common/getBmob";

/**
 * Generated class for the CommentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-comment',
  templateUrl: 'comment.html',
})
export class CommentPage extends BaseUI{
  content:any;
  moment:any;
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public viewCtrl: ViewController,
              public loadingCtrl: LoadingController,
              public toastCtrl: ToastController,
              public storage: Storage) {
    super();

  }

  ionViewDidLoad() {
    this.moment = this.navParams.get("moment");
    console.log('ionViewDidLoad CommentPage');
  }
  dismiss() {
    this.viewCtrl.dismiss();
  }
  submit() {
    this.storage.get('UserId').then((val) => {
      if (val != null) {
        var Bmob = Bmobconfig.getBmob();
        // var username =  Bmob.User.current()['username'];
        var loading = super.showLoading(this.loadingCtrl, "Posting Comment...");

        var query = Bmob.Query('comment');
        query.set('moment', this.moment['objectId']);
        query.set('moment_owner', this.moment['ownerId']);
        query.set('owner', Bmob.User.current()['objectId']);
        query.set('owner_name', Bmob.User.current()['username']);
        query.set('content', this.content);
        query.set('read', false);
        query.save();
        //   .then(res=>
        // {
        //
        //   var moment = Bmob.Query('moments');
        //   moment.get(this.moment['objectId']).then(res0=>{
        //     console.log('here');
        //     var comment=res0['comments'];
        //     console.log('res',res);
        //     console.log('res0',res0);
        //     console.log('comment',comment);
        //     comment.push(res['objectId']);
        //
        //     var moment0 = Bmob.Query('moments');
        //     moment0.set('id', res0['objectId']);
        //     moment0.set('comments',comment);
        //     moment0.save();
        //
        //   });
        //
        // });



        loading.dismiss();
      }
      else {
        super.showToast(this.toastCtrl, "Please Login first...");
      }
      this.dismiss();
    });
  }
}
