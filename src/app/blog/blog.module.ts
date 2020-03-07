import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogPostDetailsComponent } from './components/blog-post-details/blog-post-details.component';
import { BlogPostPageComponent } from './pages/blog-post-page/blog-post-page.component';
import { CommentsModule } from '../comments/comments.module';
import { BlogRoutingModule } from './blog-routing.module';
import { SharedModule } from '../shared/shared.module';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { CreateBlogPostComponent } from './components/create-blog-post/create-blog-post.component';
import { BlogsComponent } from './pages/blogs/blogs.component';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';

import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BlogPostListComponent } from './components/blog-post-list/blog-post-list.component';

@NgModule({
  declarations: [
    BlogPostDetailsComponent,
    BlogPostPageComponent,
    BlogPostListComponent,
    CreateBlogPostComponent,
    BlogsComponent
  ],
  imports: [
    CommonModule,
    BlogRoutingModule,
    CommentsModule,
    SharedModule,
    MatListModule,
    MatCardModule,
    MatIconModule,
    MatSelectModule,
    MatInputModule,
    MatFormFieldModule,
    ScrollingModule,
    FormsModule,
    FlexLayoutModule
  ]
})
export class BlogModule {}
