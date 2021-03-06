import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MasterPageComponent } from './pages/layout/master-page/master-page.component';
import { SideNavService } from '@services/side-bar.service';
import { SideBarDirective } from './directives/side-bar.directive';
import { DescriptionSideBarComponent } from './components/curriculum/curriculum-side-bar/curriculum-side-bar.component';
import { CurriculumPageComponent } from './pages/curriculum-page/curriculum-page.component';
import { CurriculumHeaderComponent } from './components/curriculum/curriculum-header/curriculum-header.component';
import { CurriculumExperienceComponent } from './components/curriculum/curriculum-experience/curriculum-experience.component';
import { CurriculumEducationComponent } from './components/curriculum/curriculum-education/curriculum-education.component';
import { CurriculumSkillsComponent } from './components/curriculum/curriculum-skills/curriculum-skills.component';
import { SideBarComponent } from './components/common/side-bar/side-bar.component';
import { TimelineItemComponent } from './components/common/timeline/timeline-item/timeline-item.component';
import { ScreenSizeDetectorDirective } from './directives/screen-size-detector.directive';
import { ScreenSizeService } from '@services/screen-size/screen-size.service';
import { ToastComponent } from './components/common/toast/toast/toast.component';
import { ToastItemComponent } from './components/common/toast/toast-item/toast-item.component';
import { ToastService } from '@services/toast/toast.service';

@NgModule({
  declarations: [
    AppComponent,
    MasterPageComponent,
    SideBarComponent,
    SideBarDirective,
    ScreenSizeDetectorDirective,
    DescriptionSideBarComponent,
    CurriculumPageComponent,
    CurriculumHeaderComponent,
    CurriculumExperienceComponent,
    TimelineItemComponent,
    CurriculumEducationComponent,
    CurriculumSkillsComponent,
    ToastComponent,
    ToastItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    SideNavService,
    ScreenSizeService,
    ToastService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
