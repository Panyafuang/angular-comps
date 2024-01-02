import { Component } from '@angular/core';

@Component({
  selector: 'app-modes-home',
  templateUrl: './modes-home.component.html',
  styleUrls: ['./modes-home.component.css']
})
export class ModesHomeComponent {
  modalOpen = false;
  items = [
    {
      title: 'why is the sky is blue?',
      content: 'because it is'
    },
    {
      title: 'what does an orange taste like?',
      content: 'an orange tastes like an orange'
    },
    {
      title: 'why is the sky is blue 2?',
      content: 'because it is2'
    },
  ]

  onModalOpen() {
    this.modalOpen = !this.modalOpen;
  }
}
