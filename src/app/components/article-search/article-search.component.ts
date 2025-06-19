import { Component } from '@angular/core';
import { InputComponent, InputOptions } from '../input/input.component';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-article-search',
  standalone: true,
  imports: [InputComponent, NgClass],
  templateUrl: './article-search.component.html',
  styleUrl: './article-search.component.scss'
})
export class ArticleSearchComponent {
  public searchInputOptions: InputOptions = { icon: "bi bi-search", placeHolder: "Search articles" };
  selectedSort: "best" | "mostRecent" | "mostSeen" = "best";
  
  handleInputValueChange(value: string): void {
  }

  selectSort(sort: "best" | "mostRecent" | "mostSeen"): void {
    this.selectedSort = sort;
  }
}
