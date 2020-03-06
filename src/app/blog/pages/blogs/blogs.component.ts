import { Component, OnInit } from '@angular/core';
import { BlogPost } from '../../interface/blog-post';
import { BlogService } from '../../services/blog.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'etalytics-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss']
})
export class BlogsComponent implements OnInit {
  blogPosts$: Observable<BlogPost[]>;
  currentProject: BlogPost;

  constructor(private blogService: BlogService) {}

  ngOnInit(): void {
    this.getBlogPosts();
  }

  getBlogPosts() {
    this.blogPosts$ = this.blogService.all();
  }
  selectBlogPost(post: BlogPost) {
    this.currentProject = post;
  }

  deleteBlogPost(post: BlogPost) {
    this.blogService.delete(post.id);
  }
}
