import { Component, OnInit } from '@angular/core';
import { BlogPost } from '../../interface/blog-post';
import { BlogService } from '../../services/blog.service';
import { Observable } from 'rxjs';
import { NotificationService } from 'src/app/core/services/notification.service';
import { Router } from '@angular/router';

@Component({
  selector: 'etalytics-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss']
})
export class BlogsComponent implements OnInit {
  blogPosts$: Observable<BlogPost[]>;
  currentBlogPost: BlogPost;
  users$: { id: number; name: string }[];

  constructor(private blogService: BlogService, private ns: NotificationService, private router: Router) {}

  ngOnInit(): void {
    this.getBlogPosts();
    this.getUsers();
  }
  getUsers() {
    this.users$ = [
      { id: 1, name: 'anonynmous' },
      { id: 2, name: 'John Doe' },
      { id: 3, name: 'Jane Doe' },
      { id: 4, name: 'Smith' }
    ];
  }

  saveBlogPost(blogPost) {
    if (!blogPost.id) {
      this.createBlogPost(blogPost);
    } else {
      this.updateBlogPost(blogPost);
    }
  }

  createBlogPost(blogPost: BlogPost) {
    // TODO: if the project obj has property with empty values... dont make API request
    if (Object.keys(blogPost).length === 0 && blogPost.constructor === Object) {
      this.ns.emit('Please enter all the fields');
      return;
    }

    this.blogService.create(blogPost).subscribe(response => {
      this.ns.emit('BlogPost created!');
      this.getBlogPosts();
      this.resetCurrentBlogPost();
    });
  }

  updateBlogPost(project) {
    this.blogService.update(project).subscribe(response => {
      this.ns.emit('Project saved!');
      this.getBlogPosts();
      this.resetCurrentBlogPost();
    });
  }
  resetCurrentBlogPost() {
    this.currentBlogPost = {
      id: null,
      title: '',
      body: '',
      userId: null
    };
  }

  getBlogPosts() {
    this.blogPosts$ = this.blogService.all();
  }
  selectBlogPost(post: BlogPost) {
    this.currentBlogPost = post;
  }

  deleteBlogPost(post: BlogPost) {
    this.blogService.delete(post.id).subscribe(data => {
      this.ns.emit(`Deleted Post by id ${post.id} Successfully!`);
      this.getBlogPosts();
    });
  }

  viewBlogPostDetail(post: BlogPost) {
    this.router.navigate([`/blogs/post/${post.id}`]);
  }
}
