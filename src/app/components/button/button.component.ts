import { CommonModule } from '@angular/common';
import { Component, Input, output, Output } from '@angular/core';

export interface ButtonInput {
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
  onClick = output();

  handleClick(): void {
    this.onClick.emit();
  }
}
