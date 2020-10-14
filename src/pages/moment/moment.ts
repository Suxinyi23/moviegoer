import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ModalController, ToastController, ViewController, LoadingController, } from 'ionic-angular';
import { QuestionPage } from '../question/question';
import { Bmobconfig } from "../../common/getBmob";
import { BaseUI } from '../../common/baseui';
import { MorePage } from '../more/more';
import { Storage } from '@ionic/storage';
import { callLifecycleHooksChildrenFirst } from '@angular/core/src/view/provider';
import { HttpClient } from "@angular/common/http";
import {AddAnswerPage} from "../add-answer/add-answer";
import {CommentPage} from "../comment/comment";

/**
 * Generated class for the DiscoveryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

// @IonicPage()
@Component({
  selector: 'page-discovery',
  templateUrl: 'moment.html',
})
export class MomentPage extends BaseUI {

  feeds: any;
  headface: any;  //ownerImg
  picture: any;
  username:any;
  likes:any;
  comment:any;


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
    this.getFeeds();
    console.log("here",this.picture, this.username);
    console.log("feeds", this.feeds)
  }
  dismiss() {
    this.viewCtrl.dismiss();
  }

  loadlikes(){
    this.likes = Array(this.feeds.length).fill(false);
    var Bmob = Bmobconfig.getBmob();

    for (let i = 0; i < this.feeds.length; i++){
      var query = Bmob.Query('like');
      var feed=this.feeds[i];
      query.equalTo('moment', "==", feed['objectId']);
      query.equalTo('owner', "==", Bmob.User.current()['objectId']);
      query.find().then(res=>{
        if(res.length!=0)this.likes[i]=true;
      })
    }
  }

  like(feed){
    this.likes[feed['index']]=true;
    this.feeds[feed['index']]['likes']++;
    var Bmob = Bmobconfig.getBmob();
    var like = Bmob.Query('like');
    like.set('moment', feed['objectId']);
    like.set('moment_owner', feed['ownerId']);
    like.set('owner', Bmob.User.current()['objectId']);
    like.set('owner_name',Bmob.User.current()['username']);
    like.set('read', false);
    like.save();
    var moment1=Bmob.Query('moments');
    moment1.set('id', feed['objectId']);
    moment1.set('likes',feed['likes']);
    moment1.save();

  }

  notlike(feed)
  {
    console.log("notlike!");
    this.likes[feed['index']]=false;
    this.feeds[feed['index']]['likes']--;
    var Bmob = Bmobconfig.getBmob();

    var query=Bmob.Query('like');
    query.equalTo('owner', "==",  Bmob.User.current()['objectId']);
    query.equalTo('moment', "==",  feed['objectId']);
    query.find().then(res=>{
      var answer0 = Bmob.Query('like');
      answer0.destroy(res[0]['objectId']).then(res=>{

        var moment1=Bmob.Query('moments');
        moment1.set('id', feed['objectId']);
        moment1.set('likes',feed['likes']);
        moment1.save();

      })
    });
  }

  getFeeds() {
    this.todoGetFeeds();
  }
  todoGetFeeds() {
    var Bmob = Bmobconfig.getBmob();
    var follow=Bmob.Query('follow');
    follow.equalTo("owner_id", "==", Bmob.User.current()['objectId']);
    // follow.select("following_id");
    follow.find().then(following=>{
      console.log('following',following)
      var f=[];
      for(var i=0;i<following.length;i++)
      {
        f.push(following[i]['following_id']);
      }
      f.push(Bmob.User.current()['objectId']);
      var query = Bmob.Query('moments');
      query.order('-updateAt');
      query.containedIn("owner",f);
      console.log('f',f)
      query.find().then((todo) => {
        // this.feeds = todo.reverse();
        this.feeds = todo;
        this.loadlikes();
        this.headface = Array(this.feeds.length).fill("");
        this.username=Array(this.feeds.length).fill("");
        this.picture=Array(this.feeds.length).fill([]);
        this.comment=Array(this.feeds.length).fill([]);
        for (let i = 0; i < this.feeds.length; i++) {
          this.feeds[i]['index'] = i;
          var feed1 = this.feeds[i];
          var objectId = feed1['owner']['objectId'];
          var urls=feed1['urls'];

          // var comment = Bmob.Query('comment');
          // comment.equalTo("moment", "==", feed1['objectId']);
          // comment.order('updateAt');
          // comment.find().then(res=>{
          //   this.comment[i]=res;
          // });

          let pic=[];
          for(let j=0;j<urls.length;j++)
          {
            this.http.get(urls[j],{responseType:  'arraybuffer'}).subscribe((ab) => {
              // var base64String = btoa(String.fromCharCode.apply(null, new Uint8Array(ab)));
              var base64String= btoa([].reduce.call(new Uint8Array(ab),function(p,c){return p+String.fromCharCode(c)},''))
              pic.push('data:image/jpeg;base64,'+ base64String);
            });
          }
          this.picture[i]=pic;

          var comment = Bmob.Query('comment');
          comment.equalTo("moment", "==", feed1['objectId']);
          comment.order('updateAt');
          let comment_list=[];
          comment.find().then(res=>{

            for(let j=0;j<res.length;j++){
              comment_list.push(res[j]);
            }
          });
          this.comment[i]=comment_list;

          var query0 = Bmob.Query('_User');
          query0.equalTo('objectId', "==", objectId);
          query0.find().then(res=>{
            var url=res[0]['headimage'];
            this.http.get(url,{responseType:  'arraybuffer'}).subscribe((ab) => {
              // let base64String = btoa(String.fromCharCode.apply(null, new Uint8Array(ab)));
              var base64String= btoa([].reduce.call(new Uint8Array(ab),function(p,c){return p+String.fromCharCode(c)},''))
              let imgData='data:image/jpeg;base64,'+ base64String;

              this.headface[i]=imgData;
              this.username[i]=res[0]['username'];
            });
          })
        }
        console.log(this.picture);
        console.log(this.comment)
      })
    });

  }
  gotoComment(f){
    let modal = this.modalCtrl.create(CommentPage,{ moment: f });
    //关闭后的回调
    modal.onDidDismiss(() => {
      this.getFeeds();
    });
    modal.present();
  }
}

