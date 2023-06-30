import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JobListComponent } from './pages/job-list/job-list.component';
import { CreateJobComponent } from './pages/create-job/create-job.component';
import { EditJobComponent } from './pages/edit-job/edit-job.component';

const routes: Routes = [
  {
    path: '',
    component: JobListComponent
  },
  {
    path: 'create',
    component: CreateJobComponent
  },
  {
    path: ':id',
    component: EditJobComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JobRoutingModule { }
