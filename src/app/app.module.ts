import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { ProductListComponent } from './product-list/product-list.component';
import { BooksComponent } from './books/books.component';
import { TasksComponent } from './tasks/tasks.component';

import { AppRoutingModule }     from './app-routing/app-routing.module';
import { BookComponent } from './book/book.component';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductListComponent,
    SidenavComponent,
    BooksComponent,
    TasksComponent,
    BookComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/