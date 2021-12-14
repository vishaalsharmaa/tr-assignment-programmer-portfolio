import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResumeBuilderComponent } from './builder/resume-builder/resume-builder.component';
import { AboutComponent } from './components/about/about.component';
import { WorkComponent } from './components/work/work.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'about',
    pathMatch: 'full',
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'work',
    component: WorkComponent,
  },
  {
    path: 'builder',
    component: ResumeBuilderComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
