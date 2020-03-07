import { Component, OnInit, ViewEncapsulation, Input, EventEmitter, Output } from '@angular/core';
import { BlogService } from '../../services/blog.service';
import { BlogPost } from '../../interface/blog-post';

@Component({
  selector: 'etalytics-blog-post-list',
  templateUrl: './blog-post-list.component.html',
  styleUrls: ['./blog-post-list.component.scss']
})
export class BlogPostListComponent implements OnInit {
  @Input() blogPosts: BlogPost[];
  @Output() selected = new EventEmitter();
  @Output() deleted = new EventEmitter();
  @Output() viewDetail = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}
}
