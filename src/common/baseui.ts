import {Loading, LoadingController, Toast, ToastController} from "ionic-angular";
import {m} from "@angular/core/src/render3";
export abstract class BaseUI{
  protected constructor() {

  }

  protected showLoading(LoadingCtrl:LoadingController, message:string):Loading{
    let loader=LoadingCtrl.create(
      {
        content:message,
        dismissOnPageChange:true
      });
    loader.present();
    return loader;
  }

  protected showToast(toastCtrl:ToastController, message:string):Toast{
    let toast=toastCtrl.create(
      {
        message:message,
        duration:3000,
        position:'bottom'
      });
    toast.present();
    return toast;
  }
}
