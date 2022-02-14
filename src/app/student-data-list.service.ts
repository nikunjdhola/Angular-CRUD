import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentDataListService {

  datalist:any = [];

  constructor() { }

  getData(){
    let data = localStorage.getItem("studentData") || '[]';
    return JSON.parse(data);
  }
}
