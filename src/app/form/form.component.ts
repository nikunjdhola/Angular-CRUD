import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { StudentDataListService } from '../student-data-list.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  datalist:any = [];

  firstname: string = "";
  lastname: string = "";
  address: string = "";
  email: string = "";
  pass: string = "";
  gen: any = ""; 
  bool: boolean = false;
  index:any = null;
  error1: boolean = false;
  error2: boolean = false;
  error3: boolean = false;
  error4: boolean = false;
  error5: boolean = false;
  error6: boolean = false;
  

  constructor(private router: Router, private dataService: StudentDataListService) {}

  ngOnInit(): void {
    this.datalist = this.dataService.getData();
  }

  check(studentData: NgForm){
    var e: boolean = false;
    if(!studentData.value.firstname || !studentData.value.lastname || !studentData.value.address || !studentData.value.email || !studentData.value.pass || !studentData.value.gen){
      e = true;
    }
    else{
      e = false;
    }
    return e;
    
  }

  validate(studentData: NgForm){

    this.doNone();

    if(!studentData.value.firstname)
      this.error1 = true;
    if(!studentData.value.lastname)
      this.error2 = true;
    if(!studentData.value.address)
      this.error3 = true;
    if(!studentData.value.email)
      this.error4 = true;
    if(!studentData.value.pass)
      this.error5 = true;
    if(!studentData.value.gen)
      this.error6 = true;

  }

  submit(studentData: NgForm){
    
    let err = this.check(studentData);

    if(err == true){
      this.validate(studentData);
    }
    else
    {
      if(this.index==null){
        this.datalist.push(studentData.value);
        localStorage.setItem("studentData",JSON.stringify(this.datalist)); 
        this.doNone();
        this.reset(studentData);
      }
      else{
        this.doNone();
        this.bool = !this.bool;
        console.log(this.bool);
        this.datalist.splice(this.index,1,studentData.value);
        localStorage.setItem("studentData",JSON.stringify(this.datalist)); 
        this.reset(studentData);
      }}
    
  }

  reset(studentData: NgForm){
    studentData.reset();
  }

  editRow(i: number, studentData: NgForm){
    this.bool = !this.bool;
    this.firstname = this.datalist[i].firstname;
    this.lastname = this.datalist[i].lastname;
    this.address = this.datalist[i].address;
    this.email = this.datalist[i].email;
    this.pass = this.datalist[i].pass;
    this.gen = this.datalist[i].gen;

    this.index = i;
  }
  
  deleteRow(i: number, studentData:NgForm){
    alert("Are You Sure?");
    this.doNone();
    this.datalist.splice(i,1);
    localStorage.setItem("studentData",JSON.stringify(this.datalist));

    this.reset(studentData);
  }

  doNone(){
    this.error1 = false;
    this.error2 = false;
    this.error3 = false;
    this.error4 = false;
    this.error5 = false;
    this.error6 = false;
  }
}
