import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';

export interface InputOptions {
  placeHolder: string;
  icon: string;
  styles?: string;
}

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [NgClass],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss',
})
export class InputComponent {
  @Input({ required: true }) options: InputOptions | null = null;
}
