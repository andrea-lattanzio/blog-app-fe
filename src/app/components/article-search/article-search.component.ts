import { Component, EventEmitter, inject, OnInit, Output } from '@angular/core';
import { NgClass } from '@angular/common';
import { ArticleSearchInputComponent, InputOptions } from '../article-search-input/article-search-input.component';
import { ArticlePaginationQueryDto } from '../../services/article.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-article-search',
  standalone: true,
  imports: [ArticleSearchInputComponent, NgClass],
  templateUrl: './article-search.component.html',
  styleUrl: './article-search.component.scss'
})
export class ArticleSearchComponent implements OnInit {
  private readonly route = inject(ActivatedRoute);
  public searchInputOptions: InputOptions = { icon: "bi bi-search", placeHolder: "Search articles", value: "" };
  selectedSort: "best" | "mostRecent" | "mostSeen" = "best";
  query: ArticlePaginationQueryDto = { sortBy: this.selectedSort };
  @Output() inputValueChange = new EventEmitter<ArticlePaginationQueryDto>();
  public category: string = '';

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.category = params.get('category')!;
      this.reset();
    });
  }
  
  handleInputValueChange(value: string): void {
    this.query.titleContains = value;
    this.searchInputOptions.value = value;
    this.inputValueChange.emit(this.query);
  }

  selectSort(sort: "best" | "mostRecent" | "mostSeen"): void {
    this.selectedSort = sort;
    this.query.sortBy = sort;
    this.inputValueChange.emit(this.query);
  }

  private reset(): void {
    // reset filters
    this.selectedSort = "best";
    this.searchInputOptions.value = "";

    // reset query
    this.query.tag = this.category;
    this.query.sortBy = this.selectedSort;
    this.query.titleContains = "";

    // emit to articles component to refresh articles
    this.inputValueChange.emit(this.query);
  }
}
