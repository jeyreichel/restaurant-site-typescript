import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isAuthenticated: boolean;

  constructor() { }

  ngOnInit(): void {
    this.isAuthenticated = false;
  }

}