import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, output, Output } from '@angular/core';

export interface ButtonInput {
  type?: 'submit' | 'reset';
  icon?: string;
  text?: string;
  disabled?: boolean;
  styles?: string;
}

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent {
  @Input() inputs!: ButtonInput;
  onClick = new EventEmitter<void>();

  handleClick(): void {
    if (this.onClick.observed) {
      this.onClick.emit();
    }
  }
}
