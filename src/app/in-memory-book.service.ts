import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Book } from './book/book';

@Injectable({
  providedIn: 'root',
})
export class InMemoryBookService implements InMemoryDbService {

  constructor() { }
  createDb() {
    const books = [
      { id: 11, name: 'Dr Nice' },
      { id: 12, name: 'Narco' },
      { id: 13, name: 'Bombasto' },
      { id: 14, name: 'Celeritas' },
      { id: 15, name: 'Magneta' },
      { id: 16, name: 'RubberMan' },
      { id: 17, name: 'Dynama' },
      { id: 18, name: 'Dr IQ' },
      { id: 19, name: 'Magma' },
      { id: 20, name: 'Tornado' }
    ];
    return {books};
  }

  genId(books: Book[]): number {
    return books.length > 0 ? Math.max(books.map(book => book.id)) + 1 : 11;
  }
}