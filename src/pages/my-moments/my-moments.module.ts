import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyMomentsPage } from './my-moments';

@NgModule({
  declarations: [
    MyMomentsPage,
  ],
  imports: [
    IonicPageModule.forChild(MyMomentsPage),
  ],
})
export class MyMomentsPageModule {}
