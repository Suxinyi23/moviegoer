import { Component } from '@angular/core';
import {
  ActionSheetController,
  IonicPage,
  LoadingController,
  ModalController,
  NavController,
  NavParams,
  Platform, ToastController, ViewController
} from 'ionic-angular';
import {Bmobconfig} from "../../common/getBmob";
import {Storage} from "@ionic/storage";
import {HttpClient} from "@angular/common/http";
import {Camera} from "@ionic-native/camera";
import {Transfer} from "@ionic-native/transfer";
import {File} from "@ionic-native/file";
import {FilePath} from "@ionic-native/file-path";
import {BaseUI} from "../../common/baseui";
import * as $ from "jquery";

/**
 * Generated class for the WritePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

// @IonicPage()
@Component({
  selector: 'page-write',
  templateUrl: 'write.html',
})
export class WritePage extends BaseUI{

  img_count=1;
  device:string;
  content:string;
  file_list=[];


  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public modalCtrl: ModalController,
              public storage: Storage,
              public loadingCtrl: LoadingController,
              public http:HttpClient,
              public camera: Camera,
              public transfer: Transfer,
              public file: File,
              public platform: Platform,
              public filePath: FilePath,
              public actionSheetCtrl: ActionSheetController,
              public toastCtrl: ToastController,
              public viewCtrl: ViewController
              ) {
    super();
  }

  ionViewDidLoad() {
    this.img_count=1;
    this.file_list=[];
    if(this.platform.is('android'))this.device='android';
    else this.device='web';

  }

  blob2Base64 = function(blob, callback) {
    var reader = new FileReader();
    reader.onload = function() {
      var dataUrl = reader.result;
      var base64 = dataUrl.split(',')[1];
      callback(base64);
    };
    reader.readAsDataURL(blob);
  };

  selectImg(){
    this.img_count++;
  }



  post(){
    console.log("here");
    var img_list=[];
    for(let i=1;i<3;i++)
    {
      const uploadsFile = <HTMLInputElement>document.getElementById("file-input"+i.toString());
      const resultFile = uploadsFile.files[0];
      console.log(i,resultFile);

      let formData = new FormData();
      if (resultFile){
        formData.append('file',resultFile);
        $.ajax({
          url:"http://localhost:8088/firstWeb/uploadImg",
          type:"POST",
          data: formData,
          processData: false, // 告诉jQuery不要去处理发送的数据
          contentType: false, // 告诉jQuery不要去设置Content-Type请求头
          success: function(result){

          }
        });
        var headurl='http://localhost:8080/photo/'+resultFile.name;
        img_list.push(headurl)
      }

    }

    this.storage.get('UserId').then(val=>{
      console.log(val);
      var Ownerid = val;
      var Bmob = Bmobconfig.getBmob();
      const pointer1 = Bmob.Pointer('_User');
      const OwnerpoiID = pointer1.set(Ownerid);
      var moment = Bmob.Query('moments');

      moment.set('content', this.content);
      moment.set('owner', OwnerpoiID);
      moment.set('ownerId', val);
      moment.set('urls', img_list);
      moment.set('comments', []);
      moment.set('likes', 0);
      moment.set('username', Bmob.User.current()['username']);
      moment.save();
      super.showToast(this.toastCtrl, "succeeded!");
    }).catch(err => {
      super.showToast(this.toastCtrl, "error in choosing a photo!");
      console.log(err)
    })
  }
  //为文件生成一个新的文件名
  createFileName() {
    var rand=Math.random().toString(36).slice(-4)
    var d = new Date(),
      n = d.getTime(),
      newFileName = n + rand+".jpg"; //拼接文件名
    return newFileName;
  }

  loadImageFromDevice1(event) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsArrayBuffer(file);
    reader.onload = () => {

      let blob: Blob = new Blob([new Uint8Array((reader.result as ArrayBuffer))]);

      this.blob2Base64(blob, function(base64String) {
      document.getElementById('show1')['src']='data:image/jpeg;base64,'+base64String});
      // this.img_count++;
    };
  };

  loadImageFromDevice2(event) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsArrayBuffer(file);
    reader.onload = () => {

      let blob: Blob = new Blob([new Uint8Array((reader.result as ArrayBuffer))]);

      this.blob2Base64(blob, function(base64String) {
        document.getElementById('show2')['src']='data:image/jpeg;base64,'+base64String});
      // this.img_count++;
    };
  };

  loadImageFromDevice3(event) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsArrayBuffer(file);
    reader.onload = () => {

      let blob: Blob = new Blob([new Uint8Array((reader.result as ArrayBuffer))]);

      this.blob2Base64(blob, function(base64String) {
        document.getElementById('show3')['src']='data:image/jpeg;base64,'+base64String});
      // this.img_count++;
    };
  };

}
