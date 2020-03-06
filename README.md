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

> ng g module blog --dry-run
> ng g module comments --dry-run

> ng g c create-comment --dry-run
> ng g s comments --dry-run

Detail Page can be viewed at http://localhost:4200/blogs/post/1
