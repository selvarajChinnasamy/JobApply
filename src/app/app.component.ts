import { Component } from '@angular/core';
import { JobsServiceService } from './jobs-service.service';
import {MatDialog} from '@angular/material';
import { AppliedJobsComponent } from './applied-jobs/applied-jobs.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  category=[];
  constructor(private jobService:JobsServiceService,public dialog: MatDialog){
    this.jobService.changeCat().subscribe(response => { 
      if(response == 'category') {
          this.category=this.jobService.getCategoryList();
      }
    })
  }
  openDialog(): void {
    let dialogRef = this.dialog.open(AppliedJobsComponent, {
      width: '400px',
    });
  }
}
