import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleChapterComponent } from './article-chapter.component';

describe('ArticleChapterComponent', () => {
  let component: ArticleChapterComponent;
  let fixture: ComponentFixture<ArticleChapterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArticleChapterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ArticleChapterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
