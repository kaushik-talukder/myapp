import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  employeeList : [{name:string, department:string}] = [{
    name: 'Kaushik',
    department: 'Retail'
  }];
  
  constructor() { 
    
  }

  ngOnInit(): void {
    
  }

  onEmployeeRegistered(employeeData : {name:string, department:string}){
    this.employeeList.push({
      name:employeeData.name,
      department:employeeData.department
    });
  }
}
