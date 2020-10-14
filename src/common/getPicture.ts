import { HttpClient } from "@angular/common/http";

export class getPicture{
  constructor(){}
  static ret:string;
  public static getpic(url:string, http:HttpClient):string{
    http.get(url,{responseType:  'arraybuffer'}).subscribe((ab) => {
      var base64String = btoa(String.fromCharCode.apply(null, new Uint8Array(ab)));
      this.ret='data:image/jpeg;base64,'+ base64String;
    });
    return this.ret;
  }
}
