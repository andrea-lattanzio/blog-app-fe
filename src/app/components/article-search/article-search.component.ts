import { Component, EventEmitter, Output, output } from '@angular/core';
import { InputComponent, InputOptions } from '../input/input.component';

@Component({
  selector: 'app-article-search',
  standalone: true,
  imports: [InputComponent],
  templateUrl: './article-search.component.html',
  styleUrl: './article-search.component.scss'
})
export class ArticleSearchComponent {
  public searchInputOptions: InputOptions = {
    icon: "bi bi-search",
    placeHolder: "Search articles"
  }
  @Output() inputValueChange = new EventEmitter<string>();
  

  handleInputValueChange(value: string): void {
    this.inputValueChange.emit(value);
  }
}
