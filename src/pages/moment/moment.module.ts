import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MomentPage } from './moment';

@NgModule({
  declarations: [
    MomentPage,
  ],
  imports: [
    IonicPageModule.forChild(MomentPage),
  ],
})
export class MomentPageModule {}
