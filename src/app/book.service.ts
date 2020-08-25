import { Injectable } from '@angular/core';
import { BOOKS } from './mock_books';
import { Book } from './book/book';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class BookService {

  private url = '/api/books';
  constructor(private http: HttpClient) { }

  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.url)
    //return of(BOOKS);
  }
}