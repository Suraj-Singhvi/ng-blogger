import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, timeout } from 'rxjs/operators';
import { BlogPost } from '../interface/blog-post';
import { Constants } from 'src/app/constants';
import { BaseService } from 'src/app/shared/services/base.service';

export class BlogService extends BaseService {
  getPostById(id: string): Observable<BlogPost> {
    return this.httpClient
      .get<BlogPost>(`${Constants.apiRoot}/posts/${id}`)
      .pipe(timeout(this.config.Ajax.LongTimeout), catchError(this.createErrorHandler('Unable to load Post details')));
  }

  all(): Observable<BlogPost[]> {
    return this.httpClient
      .get<BlogPost[]>(`${Constants.apiRoot}/posts`)
      .pipe(timeout(this.config.Ajax.LongTimeout), catchError(this.createErrorHandler('Unable to load any Post')));
  }

  delete(id: number) {
    return this.httpClient
      .delete<any>(`${Constants.apiRoot}/posts/${id}`)
      .pipe(timeout(this.config.Ajax.LongTimeout), catchError(this.createErrorHandler('Unable to load any Post')));
  }

  create(post: BlogPost) {
    return this.httpClient
      .post<BlogPost>(`${Constants.apiRoot}/posts/`, post)
      .pipe(timeout(this.config.Ajax.LongTimeout), catchError(this.createErrorHandler('Unable to create blog post')));
  }

  update(post: BlogPost) {
    return this.httpClient
      .patch<BlogPost>(`${Constants.apiRoot}/posts/${post.id}`, post)
      .pipe(timeout(this.config.Ajax.LongTimeout), catchError(this.createErrorHandler('Unable to update blog post')));
  }
}
