import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleParagraphComponent } from './article-paragraph.component';

describe('ArticleParagraphComponent', () => {
  let component: ArticleParagraphComponent;
  let fixture: ComponentFixture<ArticleParagraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArticleParagraphComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ArticleParagraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
