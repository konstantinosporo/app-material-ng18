import { Component, ViewChild } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule, MatMenuTrigger } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [MatToolbarModule, MatIconModule, MatMenuModule, MatButtonModule, RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  // material trigger event
  @ViewChild(MatMenuTrigger) trigger!: MatMenuTrigger;
   /**
   * @konstantinosporo
   * @description
   * A simple array with navlink object.
   * Adjusting this array, will update the actual links.
   */
  navLinks = [
    {
      title: 'Home',
      href: '/',
      icon: 'home_app_logo',
    },
    {
      title: 'Library',
      href: '/library',
      icon: 'book_2'
    },
    {
      title: 'Reservations',
      href: '/reservations',
      icon: 'book_online'
    },
    {
      title: 'Customers',
      href: '/customers',
      icon: 'groups'
    },
  ];

}
