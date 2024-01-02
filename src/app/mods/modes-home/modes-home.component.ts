import { Component } from '@angular/core';

@Component({
  selector: 'app-modes-home',
  templateUrl: './modes-home.component.html',
  styleUrls: ['./modes-home.component.css']
})
export class ModesHomeComponent {
  modalOpen = false;

  onModalOpen() {
    this.modalOpen = !this.modalOpen;
  }
}
