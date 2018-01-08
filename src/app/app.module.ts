import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatDialogModule, MatTableModule, MatInputModule, MatCardModule, MatButtonModule, MatSelectModule, MatChipsModule} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { JobsAddComponent } from './jobs-add/jobs-add.component';
import { CataAddComponent } from './cata-add/cata-add.component';
import { JobsDecrpComponent } from './jobs-decrp/jobs-decrp.component';
import { JobsServiceService } from './jobs-service.service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SimpleNotificationsModule } from 'angular2-notifications';
import { AppliedJobsComponent } from './applied-jobs/applied-jobs.component';

@NgModule({
  declarations: [
    AppComponent,
    JobsAddComponent,
    CataAddComponent,
    JobsDecrpComponent,
    AppliedJobsComponent
  ],
  imports: [
    BrowserModule,
    MatDialogModule,
    MatInputModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    FormsModule,
    MatButtonModule,
    MatSelectModule,
    MatChipsModule,
    MatCardModule,
    MatTableModule,
    SimpleNotificationsModule.forRoot(),
  ],
  entryComponents:[CataAddComponent,AppliedJobsComponent],
  providers: [JobsServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
