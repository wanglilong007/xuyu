import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  currentMenu="books"
  constructor() { }

  ngOnInit() {
  }
  onSelectBooks(): void {
    this.currentMenu = "books";
  }

  onSelectTasks(): void {
    this.currentMenu = "tasks";
  }
}