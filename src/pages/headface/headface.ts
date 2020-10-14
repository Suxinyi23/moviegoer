import { Component } from '@angular/core';
import {
  IonicPage,
  NavController,
  NavParams,
  ActionSheetController,
  ModalController,
  LoadingController, ToastController,
  Platform,
  normalizeURL, ViewController, Toast
} from 'ionic-angular';
import {Bmobconfig} from "../../common/getBmob";
import {Storage} from "@ionic/storage";
import {HttpClient} from "@angular/common/http";
import {BaseUI} from "../../common/baseui";

import {File, FileSaver} from "@ionic-native/file";
import {Transfer, TransferObject} from "@ionic-native/transfer";
import { FilePath } from '@ionic-native/file-path';
import { Camera , CameraOptions} from '@ionic-native/camera';
import { saveAs } from 'file-saver';
// import {JSDOM} from "jsdom";
import {JQueryStyleEventEmitter} from "rxjs/observable/FromEventObservable";

declare var cordova: any;

// const jsdom = require("@types/jsdom");
import * as $ from 'jquery';
//
// import * as $ from 'jquery';

// var jsdom = require('jsdom');
// const { JSDOM } = jsdom;
// const { window } = new JSDOM();
// const { document } = (new JSDOM('')).window;
// global.document = document;



/**
 * Generated class for the HeadfacePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

// @IonicPage()
@Component({
  selector: 'page-headface',
  templateUrl: 'headface.html',
})
export class HeadfacePage extends BaseUI{

  userId:string;
  errorMessage:string;
  lastImg:any=null;
  path:string;
  img:any;
  device:string;


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
              public viewCtrl: ViewController) {
    super();
  }

  ionViewDidLoad() {
    if(this.platform.is('android'))this.device='android';
    else this.device='web';

  }
  showToast(toastCtrl:ToastController, message:string):Toast{
    let toast=toastCtrl.create(
      {
        message:message,
        duration:3000,
        position:'bottom'
      });
    toast.present();
    return toast;
  }


  presentActionSheet()
  {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Choose a photo',
      buttons: [
        {
          text: 'Choose from albums',
          handler: () => {
            // this.takePicture(this.camera.PictureSourceType.PHOTOLIBRARY);
            this.takePicture(this.camera.PictureSourceType.PHOTOLIBRARY);
            console.log('Choose from albums clicked');
          }
        },
        {
          text: 'Take a photo',
          handler: () => {
            // this.takePicture(this.camera.PictureSourceType.CAMERA);
            this.takePicture(this.camera.PictureSourceType.CAMERA);
            console.log('Take a photo clicked');
          }
        },
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });

    actionSheet.present();
  }

  takePicture(sourceType)
  {

    const options = {
      quality: 50,/** Picture quality in range 0-100. Default is 50 */
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      saveToPhotoAlbum: true,
      sourceType: sourceType, //take a picture or choose from album
    };

    this.camera.getPicture(options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64 (DATA_URL):
      this.lastImg = imageData;
      // If base64:
      let base64Image = 'data:image/jpeg;base64,' + imageData;
      this.path = base64Image;
    }, (err) => {
      // Handle error
      super.showToast(this.toastCtrl, err+"error!");
    });
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

  loadImageFromDevice(event) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsArrayBuffer(file);
    reader.onload = () => {

      let blob: Blob = new Blob([new Uint8Array((reader.result as ArrayBuffer))]);

      this.blob2Base64(blob, function(base64String) {
        document.getElementById('show')['src']='data:image/jpeg;base64,'+base64String});
      // this.img_count++;
    };
  };

  web_chooseFromFile()
  {
    const uploadsFile = <HTMLInputElement>document.getElementById("profilePhotoFileUpload");
    const resultFile = uploadsFile.files[0];
    if(resultFile==null)
    {
      super.showToast(this.toastCtrl, "图片为空。");
      return;
    }
    console.log('here');
    console.log(resultFile);
    var FileSaver = require('file-saver');
    var filename=this.createFileName();
    FileSaver.saveAs(resultFile, filename);
    var headurl='http://localhost:8080/photo/'+filename;
    var Bmob = Bmobconfig.getBmob();
    this.storage.get('UserId').then(objectId=>{
      const query = Bmob.Query('_User');
      query.get(objectId).then(res => {
      res.set('headimage',headurl);
      res.save();
      super.showToast(this.toastCtrl, "save succeeded!");
    })

    }).catch(err => {
      super.showToast(this.toastCtrl, "error in choosing a photo!");
      console.log(err)
    })
  }

  upload2tomcat(){
    var Bmob = Bmobconfig.getBmob();
    let objectId=Bmob.User.current()['objectId'];
    console.log("objectId",objectId);
    let toastCtrl=this.toastCtrl;
    const uploadsFile = <HTMLInputElement>document.getElementById("profilePhotoFileUpload");
    let resultFile = uploadsFile.files[0];

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
          // alert("upload succeeded!");
          var message="upload succeeded!";
          let toast=toastCtrl.create(
            {
              message:message,
              duration:3000,
              position:'bottom'
            });

            let headurl='http://localhost:8080/photo/'+resultFile.name;
            const query = Bmob.Query('_User');
            query.get(objectId).then(res => {
              res.set('headimage',headurl);
              res.save();

            }).then(res=>{
              toast.present();
            });
        }
      })
    }
  }

  uploadImg()
  {
    if(this.lastImg==null)
    {
      super.showToast(this.toastCtrl, "图片为空。");
      return;
    }
    // var loading = super.showLoading(this.loadingCtrl, "UPLoading...");
    var Bmob = Bmobconfig.getBmob();
    // Bmob.debug(true);
    var objectId=Bmob.User.current()['objectId']

    super.showToast(this.toastCtrl, objectId);
      // var Bmob = Bmobconfig.getBmob();
    var upload = {
      'img': this.path
    };
    // super.showToast(this.toastCtrl, "before upload to bmob!");
    var filename="avatar.jpg";
    super.showToast(this.toastCtrl, filename);
    var file_ = Bmob.File(filename, upload);
    super.showToast(this.toastCtrl, "file created!");
    file_.save().then((obj) => {
      super.showToast(this.toastCtrl, "after upload to bmob!");
      this.img = obj[0]['url'];
      var query = Bmob.Query('_User');
      return query.get(objectId)
    }).then(res=>{
      res.set('headimage', this.img);
      return res.save();

    }).then(()=>{
      // loading.dismiss();
      super.showToast(this.toastCtrl, "success!");
    })

  }

  takePicture_0(sourceType) {
    //定义相机的一些参数
    var options = {
      quality: 100, //图片的质量
      sourceType: sourceType,
      saveToPhotoAlbum: false, //是否保存拍摄的照片到相册中去
      correctOrientation: true //是否纠正拍摄的照片的方向
    };

    //获取图片的方法
    this.camera.getPicture(options).then((imagePath) => {
      //特别处理 android 平台的文件路径问题
      if (this.platform.is('android') && sourceType === this.camera.PictureSourceType.PHOTOLIBRARY) {
        this.filePath.resolveNativePath(imagePath) //获取 android 平台下的真实路径
          .then(filePath => {
            //获取正确的路径
            let correctPath = filePath.substr(0, filePath.lastIndexOf('/') + 1);
            //获取正确的文件名
            let currentName = imagePath.substring(imagePath.lastIndexOf('/') + 1, imagePath.lastIndexOf('?'));
            this.copyFileToLocalDir(correctPath, currentName, this.createFileName());
          });
      }
      else {
        //获取正确的路径
        var correctPath = imagePath.substr(0, imagePath.lastIndexOf('/') + 1);
        //获取正确的文件名
        var currentName = imagePath.substr(imagePath.lastIndexOf('/') + 1);
        this.copyFileToLocalDir(correctPath, currentName, this.createFileName());
      }
    }, (err) => {
      super.showToast(this.toastCtrl, "选择图片出现错误，请在 App 中操作或检查相关权限。");
    });
  }

  //将获取到的图片或者相机拍摄到的图片进行一下另存为，用于后期的图片上传使用
  copyFileToLocalDir(namePath, currentName, newFileName) {
    //copyFile(path: string, fileName: string, newPath: string, newFileName: string)
    this.file.copyFile(namePath, currentName, cordova.file.dataDirectory, newFileName).then(success => {
      this.lastImg = newFileName;
    }, error => {
      super.showToast(this.toastCtrl, "存储图片到本地图库出现错误。");
    });
  }

  //为文件生成一个新的文件名
  createFileName() {
    var d = new Date(),
      n = d.getTime(),
      newFileName = n + ".jpg"; //拼接文件名
    return newFileName;
  }

  //处理图片的路径为可以上传的路径
  public pathForImage(img) {
    if (img === null) {
      return '';
    } else {
      return normalizeURL(cordova.file.dataDirectory + img);
    }
  }


  uploadImage_0() {
    console.log(this.lastImg);
    if(this.lastImg==null)
    {
      super.showToast(this.toastCtrl, "图片为空。");
      return;
    }
    var targetPath = this.pathForImage(this.lastImg);
    var filename = this.userId + ".jpg"; //定义上传后的文件名

    var loading = super.showLoading(this.loadingCtrl, "上传中...");

    //开始正式地上传
    var Bmob = Bmobconfig.getBmob();
    var file_ = Bmob.File(filename, targetPath);
    file_.save().then(data => {
      loading.dismiss();
      super.showToast(this.toastCtrl, "图片上传成功。");
      //在用户看清弹窗提示后进行页面的关闭
      setTimeout(() => {
        this.viewCtrl.dismiss();
      }, 3000);
    }, err => {
      loading.dismiss();
      super.showToast(this.toastCtrl, "图片上传发生错误，请重试。");
    });
  }


}
