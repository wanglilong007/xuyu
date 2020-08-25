import { Injectable } from '@angular/core';
import { BOOKS } from './mock_books';
import { Book } from './book/book';

@Injectable({
  providedIn: 'root',
})
export class BookService {

  constructor() { }

  getBooks(): Book[] {
    return BOOKS;
  }
}