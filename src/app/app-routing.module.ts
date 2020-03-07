import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MasterPageComponent } from './pages/layout/master-page/master-page.component';
import { CurriculumPageComponent } from './pages/curriculum-page/curriculum-page.component';
import { ToastComponent } from './components/common/toast/toast/toast.component';


const routes: Routes = [
  {
    path: '',
    component: MasterPageComponent,
    children: [
      {
        path: '',
        component: CurriculumPageComponent
      },
    ]
  },
  {
    path: 'teste',
    component: ToastComponent
  }
  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
