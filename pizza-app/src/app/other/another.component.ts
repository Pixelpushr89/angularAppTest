import { Component , EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-another',
  template: `
    <p>
      {{ name }}

    </p>

    <div class="test" (click)="onClick()"></div>

  `,
  styles: [`
    div {
      width: 100px;
      height: 100px;
      background-color: gold;
    }
  `]
})
export class AnotherComponent {
  @Input() name: string;
  @Output() clicked = new EventEmitter<string>();

  onClick() {
    this.clicked.emit('Neuer text');
  }
}
