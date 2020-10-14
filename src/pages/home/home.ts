import { Component } from '@angular/core';
import {NavController, ToastController} from 'ionic-angular';
import { ModalController, Tabs, LoadingController } from 'ionic-angular';
import { QuestionPage } from "../question/question";
// import { QuestionPage } from "../question/question";
import { BaseUI } from "../../common/baseui";
import {RestProvider} from "../../providers/rest/rest";
import {Bmobconfig} from "../../common/getBmob";
import { HttpClient } from "@angular/common/http";
import {getPicture} from "../../common/getPicture";
import {AnswerPage} from "../answer/answer";
import {AddAnswerPage} from "../add-answer/add-answer";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage extends BaseUI{

  feeds:any;
  photo:any;
  username:any;
  didLoad=false;
  search:string;
  constructor(public navCtrl: NavController,
              public modalCtrl: ModalController,
              public loadingCtrl: LoadingController,
              public toastCtrl: ToastController,
              public rest: RestProvider,
              public http: HttpClient) {
    super();
    this.photo = [];
    this.username=[];
  }

  ionViewDidLoad() {

    this.didLoad=true;
    this.getFeeds();
    // this.todoGetPhotos();
    console.log("here",this.photo, this.username)
    console.log("feeds", this.feeds)
  }

  gotoQuestion() {
    var modal = this.modalCtrl.create(QuestionPage);
    modal.onDidDismiss(() => {
      this.getFeeds();
    });
    modal.present();

  }

  searchByTitle(){
    var Bmob = Bmobconfig.getBmob();
    var query = Bmob.Query('post');
    query.find().then((todo) => {


      this.feeds = todo.reverse();

      var temp=[];

      for (var i = 0; i < this.feeds.length; i++)
      {
        if(this.feeds[i]['title'].search(this.search)!=-1)
        {
          temp.push(this.feeds[i])
        }
      }
      this.feeds=temp;
      this.photo = Array(this.feeds.length).fill("");
      this.username=Array(this.feeds.length).fill("");

      for (let i = 0; i < this.feeds.length; i++) {
        this.feeds[i]['index'] = i;
        // console.log(this.feeds[i]);
        var feed1 = this.feeds[i];
        // console.log("feed1", feed1)
        var objectId = feed1['questioner_id']['objectId'];
        // console.log(objectId);
        // console.log(typeof(objectId));
        var query0 = Bmob.Query('_User');
        query0.equalTo('objectId', "==", objectId);

        query0.find().then(res=>{
          var url=res[0]['headimage'];
          // this.feeds[j]['username']=tmp['username'];
          this.http.get(url,{responseType:  'arraybuffer'}).subscribe((ab) => {
            // var base64String = btoa(String.fromCharCode.apply(null, new Uint8Array(ab)));
            // var imgData='data:image/jpeg;base64,'+ base64String;
            var base64String= btoa([].reduce.call(new Uint8Array(ab),function(p,c){return p+String.fromCharCode(c)},''))
            var imgData='data:image/jpeg;base64,'+ base64String;
            this.photo[i]=imgData;
            this.username[i]=res[0]['username'];
          });
        })
      }

    })
  }

  searchByTag(){
    var Bmob = Bmobconfig.getBmob();
    var query = Bmob.Query('post');
    query.find().then((todo) => {


      this.feeds = todo.reverse();

      var temp=[];

      for (var i = 0; i < this.feeds.length; i++)
      {
        var get=false;
        if(this.feeds[i]['tags']!=null)
        {
          for(var j=0;j<this.feeds[i]['tags'].length;j++)
          {
            if(this.feeds[i]['tags'][j].search(this.search)!=-1)
            {
              get=true;
            }
          }
        }

        if(get===true)temp.push(this.feeds[i])
      }
      this.feeds=temp;
      this.photo = Array(this.feeds.length).fill("");
      this.username=Array(this.feeds.length).fill("");

      for (let i = 0; i < this.feeds.length; i++) {
        this.feeds[i]['index'] = i;
        // console.log(this.feeds[i]);
        var feed1 = this.feeds[i];
        // console.log("feed1", feed1)
        var objectId = feed1['questioner_id']['objectId'];
        // console.log(objectId);
        // console.log(typeof(objectId));
        var query0 = Bmob.Query('_User');
        query0.equalTo('objectId', "==", objectId);

        query0.find().then(res=>{
          var url=res[0]['headimage'];
          // this.feeds[j]['username']=tmp['username'];
          this.http.get(url,{responseType:  'arraybuffer'}).subscribe((ab) => {
            // var base64String = btoa(String.fromCharCode.apply(null, new Uint8Array(ab)));
            // var imgData='data:image/jpeg;base64,'+ base64String;
            var base64String= btoa([].reduce.call(new Uint8Array(ab),function(p,c){return p+String.fromCharCode(c)},''))
            var imgData='data:image/jpeg;base64,'+ base64String;
            this.photo[i]=imgData;
            this.username[i]=res[0]['username'];
          });
        })
      }

    })
  }

  searchByPerson(){
    var Bmob = Bmobconfig.getBmob();
    var query = Bmob.Query('post');
    query.find().then((todo) => {


      this.feeds = todo.reverse();

      var temp=[];

      for (var i = 0; i < this.feeds.length; i++)
      {

        if(this.feeds[i]['username'].search(this.search)!=-1)
        {
          temp.push(this.feeds[i])
        }
      }
      this.feeds=temp;
      this.photo = Array(this.feeds.length).fill("");
      this.username=Array(this.feeds.length).fill("");

      for (let i = 0; i < this.feeds.length; i++) {
        this.feeds[i]['index'] = i;
        // console.log(this.feeds[i]);
        var feed1 = this.feeds[i];
        // console.log("feed1", feed1)
        var objectId = feed1['questioner_id']['objectId'];
        // console.log(objectId);
        // console.log(typeof(objectId));
        var query0 = Bmob.Query('_User');
        query0.equalTo('objectId', "==", objectId);

        query0.find().then(res=>{
          var url=res[0]['headimage'];
          // this.feeds[j]['username']=tmp['username'];
          this.http.get(url,{responseType:  'arraybuffer'}).subscribe((ab) => {
            console.log("ab",ab);
            // var base64String = btoa(String.fromCharCode.apply(null, new Uint8Array(ab)));
            // var imgData='data:image/jpeg;base64,'+ base64String;
            var base64String= btoa([].reduce.call(new Uint8Array(ab),function(p,c){return p+String.fromCharCode(c)},''))
            var imgData='data:image/jpeg;base64,'+ base64String;
            this.photo[i]=imgData;
            this.username[i]=res[0]['username'];
          });
        })
      }

    })
  }



  getFeeds() {
    this.todoGetFeeds();
    // console.log(this.feeds);
  }

  todoGetFeeds() {
    var Bmob = Bmobconfig.getBmob();
    var query = Bmob.Query('post');
    query.find().then((todo) => {
      this.feeds = todo.reverse();
      this.photo = Array(this.feeds.length).fill("");
      this.username=Array(this.feeds.length).fill("");

      for (let i = 0; i < this.feeds.length; i++) {
        this.feeds[i]['index'] = i;
        // console.log(this.feeds[i]);
        var feed1 = this.feeds[i];
        // console.log("feed1", feed1)
        var objectId = feed1['questioner_id']['objectId'];
        // console.log(objectId);
        // console.log(typeof(objectId));
        var query0 = Bmob.Query('_User');
        query0.equalTo('objectId', "==", objectId);

        query0.find().then(res=>{
          var url=res[0]['headimage'];
          // this.feeds[j]['username']=tmp['username'];
          console.log(url);
          this.http.get(url,{responseType:  'arraybuffer'}).subscribe((ab) => {
            // console.log("ab",ab);
            // var base64String = btoa(String.fromCharCode(...new Uint8Array(ab)));
            // // var base64String = btoa(String.fromCharCode.apply(null, new Uint8Array(ab)));
            // var imgData='data:image/jpeg;base64,'+ base64String;
            var base64String= btoa([].reduce.call(new Uint8Array(ab),function(p,c){return p+String.fromCharCode(c)},''))
            var imgData='data:image/jpeg;base64,'+ base64String;
            // console.log(imgData)
            this.photo[i]=imgData;
            this.username[i]=res[0]['username'];
          });
        })
      }
    })
  }

  gotoAnswerPage(question) {
    var Bmob = Bmobconfig.getBmob();
    var currentUser = Bmob.User.current();
    // console.log(currentUser);
    if (currentUser) {
      this.navCtrl.push(AnswerPage, { item: question });
    }
    else {
      super.showToast(this.toastCtrl, 'Please Login first...');
    }
  }

}
