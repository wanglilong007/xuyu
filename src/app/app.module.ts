import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { BooksComponent } from './books/books.component';
import { TasksComponent } from './tasks/tasks.component';

import { AppRoutingModule }     from './app-routing/app-routing.module';
import { BookComponent } from './book/book.component';
import { BookService } from './book.service';
import { InMemoryBookService } from './in-memory-book.service';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryBookService, { dataEncapsulation: false }
    )
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    SidenavComponent,
    BooksComponent,
    TasksComponent,
    BookComponent
  ],
  bootstrap: [ AppComponent ],
  providers: [BookService, InMemoryBookService]
})
export class AppModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/