import { Component } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css'],
})
export class CourseComponent {
  courses = [
    {
      id: 1,
      name: 'Node.js',
    },
    {
      id: 2,
      name: 'Angular',
    },
    {
      id: 3,
      name: 'React',
    },
    {
      id: 4,
      name: 'Express',
    },
  ];

  onAdd() {
    this.courses = [...this.courses, this.newCourse];
  }

  newCourse = {
    id: 5,
    name: 'Java',
  };

  onRemove(course: any) {
    let index = this.courses.indexOf(course);
    this.courses.splice(index, 1);
  }
}
