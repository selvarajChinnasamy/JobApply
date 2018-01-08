import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { AbstractControl, Validators, FormBuilder, FormGroup } from '@angular/forms';
import { JobsServiceService } from '../jobs-service.service';

@Component({
  selector: 'app-cata-add',
  templateUrl: './cata-add.component.html',
  styleUrls: ['./cata-add.component.css']
})
export class CataAddComponent implements OnInit {

  constructor(private fb: FormBuilder,private jobService:JobsServiceService,
    public dialogRef: MatDialogRef<CataAddComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { 
    }
    catForm: FormGroup;
    category=[];
    buildForm() {
      this.catForm = this.fb.group({
        name: ['',[Validators.required,Validators.pattern(/^[A-z]+$/),this.ValidateName]],
      });
    }
  
    ngOnInit() {
      this.buildForm();
      console.log(this.catForm);
    }
  onNoClick(): void {
    this.dialogRef.close();
  }
  ValidateName(c: AbstractControl): { [key: string]: boolean } | null {
    if ((c.value !== undefined) && (isNaN(c.value))) {
      var names = JSON.parse(localStorage.getItem("names"));
     var count=0;
      for (let i = 0; i < names.length; i++) {
        if (c.value != names[i]) {
          count++;
        }
        else {
          break;
        }
      }
      if (count < names.length) {
        return { error: true };
      }
      return null;
    }
  }
  DeleteCat(data){
    alert(data);
  }
}
