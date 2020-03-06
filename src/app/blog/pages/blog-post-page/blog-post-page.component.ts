import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';
import { BlogService } from '../../services/blog.service';
import { CommentService } from 'src/app/comments/services/comment.service';
@Component({
  selector: 'etalytics-blog-post-page',
  templateUrl: './blog-post-page.component.html',
  styleUrls: ['./blog-post-page.component.scss']
})
export class BlogPostPageComponent implements OnInit {
  id: any;
  constructor(
    private activatedRoute: ActivatedRoute,
    private blogService: BlogService,
    private commentService: CommentService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap
      .pipe(
        switchMap(params => params.get('id')),
        tap(id => (this.id = +id))
      )
      .subscribe(id => {
        this.getPostDetails(id);
        this.getCommentsForPost(id);
      });
  }

  private getPostDetails(id: string) {
    this.blogService.getPostById(+id).subscribe(data => {
      console.log(`data..................${data}`);
    });
  }

  private getCommentsForPost(id: string) {
    this.commentService.getComments(+id).subscribe(data => {
      console.log(`data..................${JSON.stringify}`);
    });
  }
}
