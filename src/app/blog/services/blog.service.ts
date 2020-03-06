import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, timeout } from 'rxjs/operators';
import { BlogPost } from '../interface/blog-post';
import { Constants } from 'src/app/constants';
import { BaseService } from 'src/app/shared/services/base.service';

@Injectable({
  providedIn: 'root'
})
export class BlogService extends BaseService {
  getPostById(id: number): Observable<BlogPost> {
    return this.httpClient
      .get<BlogPost>(`${Constants.apiRoot}/posts/${id}`)
      .pipe(timeout(this.config.Ajax.LongTimeout), catchError(this.createErrorHandler('Unable to load Post')));
  }
}
