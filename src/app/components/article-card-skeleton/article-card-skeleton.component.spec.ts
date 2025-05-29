import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleCardSkeletonComponent } from './article-card-skeleton.component';

describe('ArticleCardSkeletonComponent', () => {
  let component: ArticleCardSkeletonComponent;
  let fixture: ComponentFixture<ArticleCardSkeletonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArticleCardSkeletonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ArticleCardSkeletonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
