import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobListFiltersComponent } from './job-list-filters.component';

describe('JobListFiltersComponent', () => {
  let component: JobListFiltersComponent;
  let fixture: ComponentFixture<JobListFiltersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JobListFiltersComponent]
    });
    fixture = TestBed.createComponent(JobListFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
