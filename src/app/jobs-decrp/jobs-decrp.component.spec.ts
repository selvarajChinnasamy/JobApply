import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobsDecrpComponent } from './jobs-decrp.component';

describe('JobsDecrpComponent', () => {
  let component: JobsDecrpComponent;
  let fixture: ComponentFixture<JobsDecrpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobsDecrpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobsDecrpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
