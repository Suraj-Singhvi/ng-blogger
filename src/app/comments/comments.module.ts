import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewCommentsComponent } from './components/view-comments/view-comments.component';
import { CreateCommentComponent } from './components/create-comment/create-comment.component';

@NgModule({
  declarations: [ViewCommentsComponent, CreateCommentComponent],
  imports: [CommonModule],
  exports: [CreateCommentComponent, ViewCommentsComponent]
})
export class CommentsModule {}
