import { Injectable } from '@angular/core';
import { BOOKS } from './mock_books';
import { Book } from './book/book';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BookService {

  constructor() { }

  getBooks(): Observable<Book[]> {
    return of(BOOKS);
  }
}