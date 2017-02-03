import { Component, ViewChild, ElementRef, ContentChild } from '@angular/core';

@Component({
  selector: 'app-other',
  templateUrl: './other.component.html',
  styles: [`
    .red-border {
      border: 1px solid red;
    }
  `]
})
export class OtherComponent {
  aString = 'Ich bin ein String';
  aNumber = 100;
  attachClass = false;
  @ViewChild('testInput') input;
  @ContentChild('paragraph') paragraph: ElementRef;

  constructor() {
    setTimeout(() => {
      this.aNumber += 200;
      this.attachClass = true;
      this.paragraph.nativeElement.innerText = 'wert überschrieben!';

    }, 3000);
  }

  onClick(event: Event) {
    console.log(event);
    console.log(this.input.nativeElement.value);
    this.aString = this.input.nativeElement.value;
    this.attachClass = false;
  }
}
