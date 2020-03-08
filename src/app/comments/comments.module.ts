import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewCommentsComponent } from './components/view-comments/view-comments.component';
import { CreateCommentComponent } from './components/create-comment/create-comment.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { CommentService } from './services/comment.service';

@NgModule({
  declarations: [ViewCommentsComponent, CreateCommentComponent],
  imports: [CommonModule, ReactiveFormsModule, MatCardModule, MatInputModule, MatListModule, MatButtonModule],
  exports: [CreateCommentComponent, ViewCommentsComponent],
  providers: [CommentService]
})
export class CommentsModule {}
