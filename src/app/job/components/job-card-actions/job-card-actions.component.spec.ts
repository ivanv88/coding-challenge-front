import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobCardActionsComponent } from './job-card-actions.component';

describe('JobCardActionsComponent', () => {
  let component: JobCardActionsComponent;
  let fixture: ComponentFixture<JobCardActionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JobCardActionsComponent]
    });
    fixture = TestBed.createComponent(JobCardActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
