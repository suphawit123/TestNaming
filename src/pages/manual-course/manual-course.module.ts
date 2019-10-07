import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ManualCoursePage } from './manual-course';

@NgModule({
  declarations: [
    ManualCoursePage,
  ],
  imports: [
    IonicPageModule.forChild(ManualCoursePage),
  ],
})
export class ManualCoursePageModule {}
