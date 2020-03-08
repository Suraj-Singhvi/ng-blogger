import { TestBed } from '@angular/core/testing';

import { CommentService } from './comment.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Comments } from '../interfaces/comments.interface';
import { Observable } from 'rxjs';
import { Comment } from '@angular/compiler';

describe('CommentService', () => {
  let service: CommentService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CommentService]
    });
    httpTestingController = TestBed.inject(HttpTestingController);

    service = TestBed.inject(CommentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call get with the correct URL', () => {
    service.getComments('30').subscribe();

    const req = httpTestingController.expectOne('https://jsonplaceholder.typicode.com/posts/30/comments');
    req.flush([
      {
        postId: 30,
        id: 486,
        name: 'et aut qui eaque porro quo quis velit rerum',
        email: 'Lamont@georgiana.biz',
        body: 'iste maxime et molestiae\nqui alilat\nin aut eum libero eos itaque pariatur exercitationem\nvel quam non'
      }
    ]);
    httpTestingController.verify();
  });

  it('should initiate GET https://jsonplaceholder.typicode.com/posts/100/comments and return the HTTP response', () => {
    const expectedResponse = [
      {
        postId: 100,
        id: 496,
        name: 'et occaecati asperiores quas voluptas ipsam nostrum',
        email: 'Zola@lizzie.com',
        body: 'neque unde voluptateme vel'
      },
      {
        postId: 100,
        id: 497,
        name: 'doloribus dolores ut dolores occaecati',
        email: 'Dolly@mandy.co.uk',
        body:
          'non dolor consequatur\nlaboriosam ut deserunt autem odit\nlibero dolore non nesciunt qui\naut est consequatur quo dolorem'
      },
      {
        postId: 100,
        id: 498,
        name: 'dolores minus aut libero',
        email: 'Davion@eldora.net',
        body:
          'aliquam pariatur suscipit fugiat eos sunt\noptio um dignissimos\nquia aut beatae\nmodi consequaint veritatis deserunt est'
      },
      {
        postId: 100,
        id: 499,
        name: 'excepturi sunt cum a et rerum quo voluptatibus quia',
        email: 'Wilburn_Labadie@araceli.name',
        body: 'et necessitatibus tempora ipsum quaerat inventore est quasi quidem\nea repudulpa a rem\natque aut et'
      },
      {
        postId: 100,
        id: 500,
        name: 'ex eaque eum natus',
        email: 'Emma@joanny.ca',
        body:
          'perspiciatis quis doloremque\nveniam nisi eos velit sed\nid totam inv\naut aut aut maxime quia temporibus ut omnis'
      }
    ];

    service.getComments('100').subscribe(people => {
      expect(people).toBe(expectedResponse);
    });
    const req = httpTestingController.expectOne('https://jsonplaceholder.typicode.com/posts/100/comments');
    expect(req.request.method).toEqual('GET');
    req.flush(expectedResponse);
    httpTestingController.verify();
  });

  it('should return an observable when the postId is a string in the payload to fetch all comments', () => {
    const result = service.getComments('30');
    expect(result instanceof Observable).toBe(true);
  });

  it('should return an observable when a comment is created', () => {
    const comment: Comments = {
      postId: 30,
      id: null,
      name: 'suraj',
      email: 'suraj@gmail.com',
      body: 'Users awesome comment'
    };
    const result = service.addComment(30, comment);
    expect(result instanceof Observable).toBe(true);
  });

  it('should initiate POST https://jsonplaceholder.typicode.com/posts/30/comments and return the HTTP response', done => {
    const mockComment: Comments = {
      postId: 30,
      id: null,
      name: 'suraj',
      email: 'suraj@gmail.com',
      body: 'Users awesome comment'
    };
    const expectedResponse = {};

    service.addComment(30, mockComment).subscribe(comment => {
      expect(comment).toEqual(expectedResponse);
      done();
    });

    const req = httpTestingController.expectOne('https://jsonplaceholder.typicode.com/posts/30/comments');
    expect(req.request.method).toEqual('POST');
    req.flush(expectedResponse);
    httpTestingController.verify();
  });

  // it('should get all the comments posted', () => {
  //   expect(service).toBeTruthy();
  // });

  // it('should be able create a new comment', () => {
  //   expect(service).toBeTruthy();
  // });
});
