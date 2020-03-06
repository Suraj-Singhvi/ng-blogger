import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { BlogService } from '../../services/blog.service';
import { BlogPost } from '../../interface/blog-post';

@Component({
  selector: 'etalytics-blog-post-list-page',
  templateUrl: './blog-post-list-page.component.html',
  styleUrls: ['./blog-post-list-page.component.scss']
  // encapsulation: ViewEncapsulation.None
})
export class BlogPostListPageComponent implements OnInit {
  blogPosts: BlogPost[];

  constructor(private blogService: BlogService) {}

  ngOnInit(): void {
    this.blogService.getAllBlogs().subscribe(data => {
      this.blogPosts = data;
    });
  }
}
