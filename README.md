# Information Security and Quality Assurance Projects - Personal Library

## Description

This project is part of the **FCC Information Security and Quality Assurance Certification**.

## User stories

1. Nothing from my website will be cached in my client as a security measure.
   This is achieved setting several `HTTP headers`:

   - `Cache-Control`
   - `Surrogate-Control`
   - `Pragma`
   - `Expires`

2. I will see that the site is powered by `PHP 4.2.0` even though it isn't as a security measure.
   This is achieved setting the `X-Powered-By` `HTTP header` to `PHP 4.2.0`

3. I can `POST` a title to `/api/books` to add a book and returned will be the object with the _title_ and a unique _id_.
4. I can `GET` `/api/books` to retrieve an array of all books containing _title_, _id_, and _commentcount_.
5. I can `GET` `/api/books/{id}` to retrieve a single object of a _book_ containing _title_, _id_ and an array of _comments_ (empty array if there are no _comments_).
6. I can `POST` a _comment_ to `/api/books/{id}` to add a _comment_ to a _book_ and returned will be the _books_ object similar to get `/api/books/{id}`.
7. I can `DELETE` `/api/books/{id}` to delete a _book_. Returned will be _'delete successful'_ if successful.
8. If I `GET` a book that doesn't exist I will get a _'no book exists'_ message.
9. I can `DELETE` `/api/books` to delete all _books_ in the database. Returned will be _'complete delete successful'_ if successful.
10. All 6 functional tests required are complete and passing.

## Example request

<https://fcc-personal-library-project.herokuapp.com/api/books/>

<https://fcc-personal-library-project.herokuapp.com/api/books/{id}>

Coded with music, coffe and love by _Claudio Cortese_
