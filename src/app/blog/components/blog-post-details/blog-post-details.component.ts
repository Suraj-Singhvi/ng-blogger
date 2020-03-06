import { Component, OnInit, Input } from '@angular/core';
import { BlogPost } from '../../interface/blog-post';

@Component({
  selector: 'etalytics-blog-post-details',
  templateUrl: './blog-post-details.component.html',
  styleUrls: ['./blog-post-details.component.scss']
})
export class BlogPostDetailsComponent implements OnInit {
  @Input() postContent: BlogPost;

  constructor() {}

  ngOnInit(): void {}
}
