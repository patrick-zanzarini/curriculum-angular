import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MasterPageComponent } from './pages/layout/master-page/master-page.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { SideNavService } from './services/side-bar.service';
import { SideBarDirective } from './directives/side-bar.directive';
import { DescriptionSideBarComponent } from './components/curriculum/curriculum-side-bar/curriculum-side-bar.component';
import { CurriculumPageComponent } from './pages/curriculum-page/curriculum-page.component';
import { curriculumHeaderComponent } from './components/curriculum/curriculum-header/curriculum-header.component';
import { curriculumExperienceComponent } from './components/curriculum/curriculum-experience/curriculum-experience.component';
import { TimelineItemComponent } from './components/timeline/timeline-item/timeline-item.component';
import { curriculumEducationComponent } from './components/curriculum/curriculum-education/curriculum-education.component';
import { curriculumSkillsComponent } from './components/curriculum/curriculum-skills/curriculum-skills.component';

@NgModule({
  declarations: [
    AppComponent,
    MasterPageComponent,
    SideBarComponent,
    SideBarDirective,
    DescriptionSideBarComponent,
    CurriculumPageComponent,
    curriculumHeaderComponent,
    curriculumExperienceComponent,
    TimelineItemComponent,
    curriculumEducationComponent,
    curriculumSkillsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [SideNavService],
  bootstrap: [AppComponent]
})
export class AppModule { }
