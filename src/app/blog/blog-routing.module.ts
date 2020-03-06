import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogPostPageComponent } from './pages/blog-post-page/blog-post-page.component';

const routes: Routes = [
  // { path: '', component: BlogPostPageComponent },
  { path: 'post/:id', component: BlogPostPageComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule {}
