import { Injectable } from '@angular/core';
import { BaseService } from 'src/app/shared/services/base.service';
import { Observable } from 'rxjs';
import { Comments } from '../interfaces/comments.interface';
import { Constants } from 'src/app/constants';
import { timeout, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CommentService extends BaseService {
  getComments(postId: number): Observable<Comments[]> {
    return this.httpClient
      .get<Comments[]>(`${Constants.apiRoot}/posts/${postId}/comments`)
      .pipe(timeout(this.config.Ajax.LongTimeout), catchError(this.createErrorHandler('Unable to load Comments')));
  }

  addComment(postId: number, comment: Comments): Observable<any> {
    return this.httpClient
      .post<Comments>(`${Constants.apiRoot}/posts/${postId}/comments`, comment)
      .pipe(timeout(this.config.Ajax.LongTimeout), catchError(this.createErrorHandler('Unable to create comment')));
  }
}
