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
import { Storage } from '@ionic/storage';
import {BaseUI} from "../../common/baseui";
import {HttpClient} from "@angular/common/http";
import {Bmobconfig} from "../../common/getBmob";
import {AddAnswerPage} from "../add-answer/add-answer";


/**
 * Generated class for the AnswerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-answer',
  templateUrl: 'answer.html',
})
export class AnswerPage extends BaseUI{
  id: string;
  question:any;

  //提问者的头像和姓名
  owner_id:any;
  owner_photo:any;
  owner_username:any;
  following_owner=false;

  answers:any;
  answersArray: any;
  photo: any;
  username:any;
  following:any;
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
    this.photo = [];
    this.username=[];
    this.following=[];
  }

  ionViewDidLoad() {
    var question=this.navParams.get("item");
    this.id = question['objectId'];
    // this.questioner_id=question['questioner_id'];
    console.log("id",this.id, typeof(this.id))

  }
  ionViewDidEnter()
  {
    this.loadQuestion(this.id);
  }


   loadFollowing(){
     let temp_following=Array(this.answersArray.length).fill(false);
     let temp_following_owner=false;
     let Bmob = Bmobconfig.getBmob();
     let query3 = Bmob.Query('follow');
     query3.equalTo('owner_id', "==", Bmob.User.current()['objectId']);
     query3.equalTo('following_id', "==", this.owner_id);
     query3.find().then(res=>{
       console.log('res',res.length);
       this.following_owner = res.length != 0;
     });
     // this.following_owner=temp_following_owner;
     for (let j = 0; j < this.answersArray.length; j++){
       var feed1 = this.answersArray[j];
       // console.log('feed1',feed1);
       var objectId = feed1['owner']['objectId'];
       if(Bmob.User.current()['objectId']!=objectId)
       {
         var query = Bmob.Query('follow');
         query.equalTo('owner_id', "==", Bmob.User.current()['objectId']);
         query.equalTo('following_id', "==", objectId);
         query.find().then(res=>{
           if(res.length!=0)
           {
             temp_following[j]=true;
           }
         })
       }
     }

     this.following=temp_following;
     // this.following_owner=temp_following_owner;

   }
  loadQuestion(id) {
    // var Bmob = Bmobconfig.getBmob();

    this.storage.get('UserId').then(val=>
    {
      if(val!=null)
      {
        var loading = super.showLoading(this.loadingCtrl, "加载中...");
        var Bmob = Bmobconfig.getBmob();
        var query = Bmob.Query('post');
        query.get(id).then((todo) => {
          this.question = todo;
           console.log("here", id, this.question)

          // console.log("feed1", feed1)
          var objectId = this.question['questioner_id']['objectId'];
           this.owner_id=objectId;
          // console.log(objectId);
          // console.log(typeof(objectId));
          var query0 = Bmob.Query('_User');
          query0.equalTo('objectId', "==", objectId);

          query0.find().then(res=>{
            var url=res[0]['headimage'];
            // this.feeds[j]['username']=tmp['username'];
            this.http.get(url,{responseType:  'arraybuffer'}).subscribe((ab) => {
              var base64String= btoa([].reduce.call(new Uint8Array(ab),function(p,c){return p+String.fromCharCode(c)},''));
              var imgData='data:image/jpeg;base64,'+ base64String;

              this.owner_photo=imgData;
              this.owner_username=res[0]['username'];
            });
          });

          this.answers = todo['answer_id_list'];
          var query2 = Bmob.Query('answer');
          query2.containedIn('objectId', this.answers);
          return query2.find();
        }).then((todo) => {
          this.answersArray = todo.reverse();
          var i;
          for (i = 0; i < this.answersArray.length; i++) {
            this.answersArray[i]['index'] = i;
          }
          var todo1 = todo;
          var query3 = Bmob.Query('follow');
          query3.equalTo('owner_id', "==", Bmob.User.current()['objectId']);
          query3.equalTo('following_id', "==", this.owner_id);
          query3.find().then(res=>{
            if(res.length!=0)
            {
                this.following_owner=true;
            }
          });

          this.photo = Array(todo1.length).fill("");
          this.username=Array(todo1.length).fill("");
          this.following=Array(todo1.length).fill(false);
          for (let j = 0; j < todo1.length; j++) {
            var feed1 = todo1[j];
            console.log('feed1',feed1);
            var objectId = feed1['owner']['objectId'];
            if(Bmob.User.current()['objectId']!=objectId)
            {
              var query = Bmob.Query('follow');
              query.equalTo('owner_id', "==", Bmob.User.current()['objectId']);
              query.equalTo('following_id', "==", objectId);
              query.find().then(res=>{
                if(res.length!=0)
                {
                  this.following[j]=true;
                }
              })
            }
            var query0 = Bmob.Query('_User');
            query0.equalTo('objectId', "==", objectId);

            query0.find().then(res=>{
              var url=res[0]['headimage'];
              // this.feeds[j]['username']=tmp['username'];
              this.http.get(url,{responseType:  'arraybuffer'}).subscribe((ab) => {
                var base64String= btoa([].reduce.call(new Uint8Array(ab),function(p,c){return p+String.fromCharCode(c)},''))
                var imgData='data:image/jpeg;base64,'+ base64String;

                this.photo[j]=imgData;
                this.username[j]=res[0]['username'];
              });
            })
          }
        }).then(() => {
        });
        loading.dismiss();
      }
    });
  }

  toFollow(id, index){
    var Bmob = Bmobconfig.getBmob();
    if( Bmob.User.current()['objectId']==id){
      super.showToast(this.toastCtrl, "不能关注自己!");
      return;
    }

    var query=Bmob.Query('follow');
    query.equalTo('owner_id', "==",  Bmob.User.current()['objectId']);
    query.equalTo('following_id', "==",  id);
    query.find().then(res=>{
      console.log("check res",res.length);
      if(res.length==0)
      {
        var answer = Bmob.Query('follow');
        answer.set('following_id', id);
        answer.set('owner_id', Bmob.User.current()['objectId']);
        answer.set('read', false);
        answer.save().then(res=>{
          this.loadFollowing();
          super.showToast(this.toastCtrl, "关注成功!");
        })

      }
      else {
        var answer0 = Bmob.Query('follow');
        answer0.destroy(res[0]['objectId']).then(res=>{
          this.loadFollowing();
          super.showToast(this.toastCtrl, "取消关注成功!");

        })

      }

    });
    console.log("following owner:",this.following_owner);

  }
  showAddAnswerPage() {
    let modal = this.modalCtrl.create(AddAnswerPage, { "id": this.id });
    //关闭后的回调
    modal.onDidDismiss(() => {
      this.loadQuestion(this.id);
    });
    modal.present();
  }
}
