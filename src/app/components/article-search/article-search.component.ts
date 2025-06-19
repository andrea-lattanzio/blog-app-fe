import { Component } from '@angular/core';
import { NgClass } from '@angular/common';
import { ArticleSearchInputComponent, InputOptions } from '../article-search-input/article-search-input.component';

@Component({
  selector: 'app-article-search',
  standalone: true,
  imports: [ArticleSearchInputComponent, NgClass],
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
