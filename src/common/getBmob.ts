// import Bmob from 'hydrogen-js-sdk'
export class Bmobconfig{
  public static bmob;
  public static isIniteBmob = 0;
  public static getBmob(){
    if(this.isIniteBmob == 0){
      var Bmob = require('../../node_modules/hydrogen-js-sdk/src/lib/app.js');

      // var BmobSocket = require('../../node_modules/hydrogen-js-sdk/src/lib/socket.js')
      var APP_ID = '3a8d5ede11cbbdfc304094a29052a867';
      var APP_KEY = '609a1b690ebb89089aa7906a10f2144b';
      var secret_key='0f4054a2d630d1c5';
      var API_secureCode='092048';

      Bmob.initialize(APP_ID, APP_KEY);
      let BmobSocketIo =Bmob.Socket;
      console.log(BmobSocketIo.updateTable);
      console.log(BmobSocketIo);
      this.bmob = Bmob;
      this.isIniteBmob = 1;
    }
    return this.bmob;
  }
}
