import { Component } from '@angular/core';

@Component({
  selector: 'app-views-home',
  templateUrl: './views-home.component.html',
  styleUrls: ['./views-home.component.css']
})
export class ViewsHomeComponent {
  stats = [
    { value: 22, label: '# of Users' },
    { value: 902, label: 'Revenue' },
    { value: 50, label: 'Reviews' },
  ];

  items = [
    {
      image: '/assets/images/couch.jpeg',
      title: 'couch',
      description: 'this is a fantastic couch'
    },
    {
      image: '/assets/images/dresser.jpeg',
      title: 'dresser',
      description: 'this is a fantastic dresser'
    }
  ]
}
