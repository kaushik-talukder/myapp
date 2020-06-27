import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent implements OnInit {

  @Output('listenEmployeeRegistered') employeeRegistered = new EventEmitter<{name:string,department:string}>();

  employeeName:string;
  employeeDepartment:string;

  constructor() { }

  ngOnInit(): void {
  }

  onClickRegister(){
    this.employeeRegistered.emit({
      name: this.employeeName,
      department:this.employeeDepartment
    });
    this.employeeName = '';
    this.employeeDepartment = '';
  }
}
