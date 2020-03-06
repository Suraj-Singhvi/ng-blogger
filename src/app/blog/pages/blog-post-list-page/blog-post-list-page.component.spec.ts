import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogPostListPageComponent } from './blog-post-list-page.component';

describe('BlogPostListPageComponent', () => {
  let component: BlogPostListPageComponent;
  let fixture: ComponentFixture<BlogPostListPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BlogPostListPageComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogPostListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
