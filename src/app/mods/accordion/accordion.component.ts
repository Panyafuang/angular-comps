import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css']
})
export class AccordionComponent {
  @Input() items: { title: string, content: string }[] = [];
  openAccordinIndex = 0;

  onClick(index: number) {
    if (index === this.openAccordinIndex) {
      this.openAccordinIndex = -1;
    } else {
      this.openAccordinIndex = index;
    }
  }
}
