import { Component, OnInit } from '@angular/core';
import { JobsServiceService } from '../jobs-service.service';

@Component({
  selector: 'app-applied-jobs',
  templateUrl: './applied-jobs.component.html',
  styleUrls: ['./applied-jobs.component.css']
})
export class AppliedJobsComponent implements OnInit {

  constructor(private jobService:JobsServiceService) { }
appliedJobs=[];
  ngOnInit() {
    this.appliedJobs=this.jobService.getappJobs();
  }

}
