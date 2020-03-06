import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogPostDetailsComponent } from './components/blog-post-details/blog-post-details.component';
import { BlogPostPageComponent } from './pages/blog-post-page/blog-post-page.component';
import { CommentsModule } from '../comments/comments.module';
import { BlogRoutingModule } from './blog-routing.module';

@NgModule({
  declarations: [BlogPostDetailsComponent, BlogPostPageComponent],
  imports: [CommonModule, BlogRoutingModule, CommentsModule]
})
export class BlogModule {}
