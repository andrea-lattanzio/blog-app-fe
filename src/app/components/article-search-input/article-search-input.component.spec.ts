import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleSearchInputComponent } from './article-search-input.component';

describe('ArticleSearchInputComponent', () => {
  let component: ArticleSearchInputComponent;
  let fixture: ComponentFixture<ArticleSearchInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArticleSearchInputComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ArticleSearchInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
