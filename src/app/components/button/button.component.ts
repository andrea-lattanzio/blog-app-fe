import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, output, Output } from '@angular/core';

export class ButtonOptions {
  type?: 'submit' | 'reset';
  icon?: string;
  text?: string;
  disabled?: boolean = false;
  styles?: string;
  align?: string = 'text-center';
}

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent {
  @Input() options!: ButtonOptions;
  @Output() onClick = new EventEmitter<void>();

  handleClick(): void {
    if (this.onClick.observed) {
      this.onClick.emit();
    }
  }
}
