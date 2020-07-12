import {Injectable} from '@angular/core';
import {Student} from './student';

@Injectable()
export class StudentService {
  students: Student[] = [{
    name: 'Kaushik',
    school: 'JPBS'
  }, {
    name: 'Talukder',
    school: 'BZS'
  }];

  registerStudent(student: Student): void {
    this.students.push(student);
  }
}
