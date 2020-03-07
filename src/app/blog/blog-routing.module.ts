import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogPostPageComponent } from './pages/blog-post-page/blog-post-page.component';
import { CreateBlogPostComponent } from './components/create-blog-post/create-blog-post.component';
import { BlogsComponent } from './pages/blogs/blogs.component';

const routes: Routes = [
  { path: '', component: BlogsComponent },
  { path: 'blogs', component: BlogsComponent },
  { path: 'blogs/create', component: CreateBlogPostComponent },
  { path: 'blogs/post/:id', component: BlogPostPageComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule {}
