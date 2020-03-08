# ng-blogger

building a blogger using Angular 9

User Story
As a user I want
• to see posts (title, body) and corresponding comments (name, email, body),
• to add new comments to existing posts,
• to have a unique url to each post.

Backend API: https://jsonplaceholder.typicode.com/

- Angular 9
- Material UI
- Jasmine, Karma - Unit testing

Detail Page can be viewed at

> http://localhost:4200/blogs/post/1 > http://localhost:4200

---

Pages:
http://localhost:4200/
http://localhost:4200/blogs/post/30

## Angular Concepts implemented

- Feature Module
- Parent - Child Communication
- Container presentation Pattern
- Using Shared & Core Module[and ensuring it is loaded only once]
- Lazing Loading
- Create Comment section - Reactive form with validation
- Create Blog Post - Template driven form
- simple Unit test cases added for `Comment service & Header component`

`pre-commit hooks are added for formatting & linting`

> Note: In case when Create, update or delete occurs, the Backend API returns success, and Data is refetched from the server and displayed. Since the Backend here is fake...newly added record is not displayed. if it were real data it will be displayed...Another solution here is to use Subjects & manage state of newly added record locally.

TODO:

- show last added or edit post | comment at the top
- write unit test cases
- create an interceptor
- show snackbar when action is completed or failed
- write trackby on forLoop
