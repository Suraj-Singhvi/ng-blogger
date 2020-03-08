# ng-blogger

building a blogger using Angular 9

User Story
As a user I want
• to see posts (title, body) and corresponding comments (name, email, body),
• to add new comments to existing posts,
• to have a unique url to each post.

Backend API: https://jsonplaceholder.typicode.com/

Focus on well documented, high quality code following Angular best practice.

- Angular 9
- Material UI, Flexlayout
- Jasmine, Karma - Unit testing
- use StoryBook : visual Document use cases as stories
- compodoc : documentation

Detail Page can be viewed at http://localhost:4200/blogs/post/1

-> write trackby on forLoop

---

Pages:
http://localhost:4200/
http://localhost:4200/blogs

## Angular Concepts implemented

Feature Module
Parent - Child Communication
Container presentation Pattern
Using Shared & Core Module[and ensuring it is loaded only once]
Lazing Loading
Create Comment section - Reactive form with validation
Create Blog Post - Template driven form

Note: In case when Create, update or delete occurs, the Backend API returns success, and Data is refetched from the server and displayed. Since the Backend here is fake...newly added record is not displayed.

TODO:
show post in desc order
show last added or edit post | comment at the top
write unit test cases
create an interceptor
show snackbar when action is completed or failed
