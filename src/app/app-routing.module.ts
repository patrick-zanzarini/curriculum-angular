import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MasterPageComponent } from './pages/layout/master-page/master-page.component';
import { curriculumPageComponent } from './pages/curriculum-page/curriculum-page.component';
import { TimelineItemComponent } from './components/timeline/timeline-item/timeline-item.component';


const routes: Routes = [
  {
    path: '',
    component: MasterPageComponent,
    children: [
      {
        path: '',
        component: curriculumPageComponent
      },

      {
        path: 'teste',
        component: TimelineItemComponent
      }
    ]
  }

  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
