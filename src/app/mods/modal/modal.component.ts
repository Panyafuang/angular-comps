import { Component, ElementRef, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit, OnDestroy {

  @Output() close = new EventEmitter();

  /** ElementRef = give us to access this element */
  constructor(private el: ElementRef) {
    // console.log(this.el.nativeElement)
  }

  ngOnDestroy(): void {
    this.el.nativeElement.remove();
  }


  ngOnInit() {
    document.body.appendChild(this.el.nativeElement);
  }

  onCloseModal() {
    this.close.emit();
  }
}
