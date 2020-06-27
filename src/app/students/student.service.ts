import { Injectable } from '@angular/core'
import {Student} from './student'

@Injectable()
export class StudentService {
    students:Student[] = [{
        name:'Kaushik',
        school:'JPBS'
    },{
        name:'Talukder',
        school:'BZS'
    }];

    registerStudent(student:Student){
        this.students.push(student);
    }
}