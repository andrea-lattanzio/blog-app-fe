import { NgClass } from '@angular/common';
import {
  Component,
  DestroyRef,
  EventEmitter,
  inject,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { debounceTime, Subject, takeUntil } from 'rxjs';

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
export class InputComponent implements OnInit {
  @Input({ required: true }) options: InputOptions | null = null;
  @Output() inputValueChange = new EventEmitter<string>();
  private inputSubject = new Subject<string>();
  private readonly destroyed = inject(DestroyRef);

  ngOnInit(): void {
    this.inputSubject
      .pipe(debounceTime(300), takeUntilDestroyed(this.destroyed))
      .subscribe((value) => this.inputValueChange.emit(value));
  }

  onInput(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    this.inputSubject.next(inputElement.value);
  }
}
