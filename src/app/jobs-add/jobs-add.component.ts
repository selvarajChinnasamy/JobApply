import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { CataAddComponent } from '../cata-add/cata-add.component';
import { JobsServiceService } from '../jobs-service.service';
import { SimpleNotificationsModule,NotificationsService } from 'angular2-notifications';

@Component({
  selector: 'app-jobs-add',
  templateUrl: './jobs-add.component.html',
  styleUrls: ['./jobs-add.component.css']
})
export class JobsAddComponent implements OnInit {

  constructor(private fb: FormBuilder, public dialog: MatDialog,private jobService:JobsServiceService, private notifi: NotificationsService) {
    localStorage.setItem("names", JSON.stringify(this.names));    
   }
   names=['Selvaraj'];
  jobForm: FormGroup;
  public options = {
    position: ["top", "left"],
    timeOut: 3000,
    lastOnBottom: true
}
  category=[];
  ngOnInit() {
    this.initForm();
  }
  initForm() {
    this.jobForm = this.fb.group({
      jobName: ['', [Validators.required,Validators.pattern(/^[ A-Za-z0-9_@./#&+-]*$/),Validators.minLength(3),Validators.maxLength(15)]],
      jobCate: ['', Validators.required],
      jobDescp: ['',[Validators.required,Validators.minLength(5),Validators.maxLength(50)]],
      jobApply: ['No'],
      time:[''],
    });
  }
  SubmitForm(data) {
    var d = new Date();
    data.time=d;
  if(this.jobService.getFormChange(data)){
    this.notifi.success('Job Added!', 'Success');  
  }else{    
    this.notifi.alert('Job Details all Ready Presents!', 'Change some data...');   
  }
  }
  openDialog(): void {
    let dialogRef = this.dialog.open(CataAddComponent, {
      width: '250px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if(result!=null)
      {
        this.jobService.updateCategory(result);     
        this.category.push(result);
        var name = JSON.parse(localStorage.getItem("names"));
        name.push(result);
        localStorage.setItem("names", JSON.stringify(name));
        this.notifi.success('Category created!', 'Click to undo...');   
      }
    });
  }
}
