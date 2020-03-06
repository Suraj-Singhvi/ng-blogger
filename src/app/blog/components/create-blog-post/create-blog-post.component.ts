import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { BlogPost } from '../../interface/blog-post';

@Component({
  selector: 'etalytics-create-blog-post',
  templateUrl: './create-blog-post.component.html',
  styleUrls: ['./create-blog-post.component.scss']
})
export class CreateBlogPostComponent {
  originalTitle: string;
  selectedBlogPost: BlogPost;
  @Output() saved = new EventEmitter();
  @Output() cancelled = new EventEmitter();

  @Input() users: any;
  @Input() set blogPost(value: BlogPost) {
    if (value) {
      this.originalTitle = value.title;
    }
    this.selectedBlogPost = Object.assign({}, value);
  }
}
