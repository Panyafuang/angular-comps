import { Component } from '@angular/core';

@Component({
  selector: 'app-collections-home',
  templateUrl: './collections-home.component.html',
  styleUrls: ['./collections-home.component.css']
})
export class CollectionsHomeComponent {
  data = [
    { name: "John Doe", age: 30, job: "Software Developer" },
    { name: "Jane Smith", age: 25, job: "Data Analyst" },
    { name: "Bob Johnson", age: 35, job: "UX Designer" },
    { name: "Alice Williams", age: 28, job: "Marketing Specialist" },
    { name: "Charlie Brown", age: 32, job: "Project Manager" },
    { name: "Eva Davis", age: 27, job: "Graphic Designer" },
    { name: "Frank Miller", age: 40, job: "Financial Analyst" },
    { name: "Grace Taylor", age: 22, job: "Customer Support Representative" },
    { name: "Harry Wilson", age: 38, job: "Sales Manager" },
    { name: "Ivy Martin", age: 29, job: "Human Resources Coordinator" }
  ];
  headers = [
    { key: 'name', label: 'Name'},
    { key: 'age', label: 'Age'},
    { key: 'job', label: 'Job'},
  ]
}
