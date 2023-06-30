import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JobRoutingModule } from './job-routing.module';
import { CreateJobComponent } from './pages/create-job/create-job.component';
import { EditJobComponent } from './pages/edit-job/edit-job.component';
import { JobListComponent } from './pages/job-list/job-list.component';
import { JobFormComponent } from './components/job-form/job-form.component';
import { TextInputComponent } from '../shared/components/text-input/text-input.component';
import { SelectInputComponent } from '../shared/components/select-input/select-input.component';
import { ChipsInputComponent } from '../shared/components/chips-input/chips-input.component';
import { PrimaryButtonComponent } from '../shared/components/primary-button/primary-button.component';
import { EffectsModule } from '@ngrx/effects';
import { JobApiEffects } from './state/effects/job-api.effects';
import { CardComponent } from '../shared/components/card/card.component';
import { HttpClientModule } from '@angular/common/http';
import { JobHttpService } from './services/job-http.service';
import { LetDirective } from '@ngrx/component';
import { JobCardComponent } from './components/job-card/job-card.component';
import { ChipListComponent } from '../shared/components/chip-list/chip-list.component';
import { BadgeComponent } from '../shared/components/badge/badge.component';
import { JobCardActionsComponent } from './components/job-card-actions/job-card-actions.component';
import { IconButtonComponent } from '../shared/components/icon-button/icon-button.component';
import { JobListFiltersComponent } from './components/job-list-filters/job-list-filters.component';
import { PaginatorComponent } from '../shared/components/paginator/paginator.component';
import { JobRedirectEffects } from './state/effects/job-redirect.effects';
import { SnackBarModule } from '../shared/components/snack-bar/snack-bar.module';
import { JobNotificationEffect } from './state/effects/job-notification.effect';

const STANDALONE_COMPONENTS = [
  BadgeComponent,
  CardComponent,
  ChipListComponent,
  ChipsInputComponent,
  IconButtonComponent,
  PaginatorComponent,
  PrimaryButtonComponent,
  SelectInputComponent,
  TextInputComponent,
];

@NgModule({
  declarations: [
    CreateJobComponent,
    EditJobComponent,
    JobCardActionsComponent,
    JobCardComponent,
    JobFormComponent,
    JobListComponent,
    JobListFiltersComponent,
  ],
  imports: [
    CommonModule,
    JobRoutingModule,
    HttpClientModule,
    SnackBarModule,
    LetDirective,
    EffectsModule.forFeature([JobApiEffects, JobRedirectEffects, JobNotificationEffect]),
    ...STANDALONE_COMPONENTS
  ],
  providers: [JobHttpService]
})
export class JobModule { }
