import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { Student } from '../student'

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent implements OnInit {

  student: Student = new Student();

  constructor(private studentService: StudentService) { }

  ngOnInit(): void {
  }

  onRegisterStudent(){
    let newStudent : Student = new Student();
    newStudent.name = this.student.name;
    newStudent.school = this.student.school;
    this.studentService.registerStudent(newStudent);
  }
}
