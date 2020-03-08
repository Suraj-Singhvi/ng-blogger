import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';
import { BlogService } from '../../services/blog.service';
import { CommentService } from 'src/app/comments/services/comment.service';
import { BlogPost } from '../../interface/blog-post';
import { Comments } from 'src/app/comments/interfaces/comments.interface';
import { NotificationService } from 'src/app/core/services/notification.service';
import { Pattern } from 'src/app/shared/pattern';

@Component({
  selector: 'etalytics-blog-post-page',
  templateUrl: './blog-post-page.component.html',
  styleUrls: ['./blog-post-page.component.scss']
})
export class BlogPostPageComponent implements OnInit {
  id: any;
  postContent: BlogPost;
  comments: Comments[];
  constructor(
    private activatedRoute: ActivatedRoute,
    private blogService: BlogService,
    private commentService: CommentService,
    private ns: NotificationService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => {
      this.id = params.get('id');
      this.getPostDetails(this.id);
      this.getCommentsForPost(this.id);
    });
  }

  handleAddComment(comment: Comments) {
    const isEmailValid = Pattern.EMAIL_PATTERN.test(comment.email);
    if (comment.name === '' || comment.body === '' || !isEmailValid) {
      this.ns.emit('Please enter all the fields');
      return;
    }

    this.commentService.addComment(1, comment).subscribe(data => {
      console.log('comment added...');
      this.ns.emit('Comment added...');
    });
  }

  private getPostDetails(id: string) {
    this.blogService.getPostById(id).subscribe(data => {
      this.postContent = data;
    });
  }

  private getCommentsForPost(id: string) {
    this.commentService.getComments(id).subscribe(data => {
      this.comments = data;
    });
  }
}
