import { Component, OnInit, Input } from '@angular/core';
import { JobsServiceService } from '../jobs-service.service';

@Component({
  selector: 'app-jobs-decrp',
  templateUrl: './jobs-decrp.component.html',
  styleUrls: ['./jobs-decrp.component.css']
})
export class JobsDecrpComponent implements OnInit {
  @Input('categoryData') category;
  jobs=[];
  sliceVal=3;
  constructor(private jobService:JobsServiceService) {
    this.jobService.getFormChanges().subscribe(response => { 
      if(response == 'changed') {
          this.jobs=this.jobService.getJobsfromCat(this.category);
      }
    })
   }
   apply(data,i){
    this.jobs[i]['jobApply']='Yes';
    this.jobService.applyJobs(data);
  }
  ngOnInit() {
  }
  sliceAdd(){
if(this.sliceVal==3){
this.sliceVal=this.jobs.length;
}else{
  this.sliceVal=3;
}
  }
}
