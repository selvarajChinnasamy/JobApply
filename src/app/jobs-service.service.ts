import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class JobsServiceService {
  public jobUpdate: EventEmitter<any> = new EventEmitter<any>();
  public catUpdate: EventEmitter<any> = new EventEmitter<any>();
  category=[];
  FormData=[];
  appliedJobs=[];
  constructor() { }
getCategoryList(){
  return this.category;
}
updateCategory(data){
this.category.push(data);
this.catUpdate.emit('category');
}
changeCat(){
  return this.catUpdate;
}
getFormChange(data) {
  for(let i=0;i<this.FormData.length;i++){
    if((this.FormData[i].jobName==data.jobName)&&(this.FormData[i].jobCate==data.jobCate)&&(this.FormData[i].jobDescp==data.jobDescp)){
      return false;
    }
  }
  this.FormData.push(data);
  this.jobUpdate.emit('changed');
  return true;
}
getFormChanges(){
  return this.jobUpdate;
}
applyJobs(data){
this.appliedJobs.push(data);
}
getappJobs(){
  return this.appliedJobs;
}
getJobsfromCat(category){
  let data=[];
for(let i=0;i<this.FormData.length;i++){
  if(this.FormData[i].jobCate==category){
    data.push(this.FormData[i]);    
  }
}
return data;
}
}
