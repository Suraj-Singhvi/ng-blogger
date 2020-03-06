import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogPostDetailsComponent } from './components/blog-post-details/blog-post-details.component';
import { BlogPostPageComponent } from './pages/blog-post-page/blog-post-page.component';
import { CommentsModule } from '../comments/comments.module';
import { BlogRoutingModule } from './blog-routing.module';
import { SharedModule } from '../shared/shared.module';
import { BlogPostListPageComponent } from './pages/blog-post-list-page/blog-post-list-page.component';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { ScrollingModule } from '@angular/cdk/scrolling';

@NgModule({
  declarations: [BlogPostDetailsComponent, BlogPostPageComponent, BlogPostListPageComponent],
  imports: [
    CommonModule,
    BlogRoutingModule,
    CommentsModule,
    SharedModule,
    MatListModule,
    MatCardModule,
    ScrollingModule
  ]
})
export class BlogModule {}
