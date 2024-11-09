import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { NgSwitch, NgSwitchCase } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { ContentComponent } from "../content/content.component";
import { SidenavComponent } from "../sidenav/sidenav.component";
import { TitleComponent } from "../title/title.component";
import { SidenavPhoneComponent } from "../sidenav/sidenav-phone/sidenav-phone.component";

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [MatGridListModule, NgSwitch, SidenavComponent, NgSwitchCase, TitleComponent, ContentComponent, MatIconModule, MatButtonModule, SidenavPhoneComponent],
  templateUrl: './test.component.html',
  styleUrl: './test.component.scss'
})
export class TestComponent implements OnInit{

tiles: Tile[] = [
    {text: 'SideNav', cols: 1, rows: 10, color: 'teal'},
    {text: 'Title', cols: 6, rows: 1, color: 'lightgreen'},
    {text: 'Content', cols: 6, rows: 9, color: '#DDBDF1'},
  ];
  links: Link[] = [
    {
      title: 'Home',
      href: '/',
      icon: 'home_app_logo'
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

  isSmallScreen = false;
  
  constructor(private readonly breakPointOserver: BreakpointObserver) { }

  ngOnInit(): void {
    this.breakPointOserver.observe([Breakpoints.Handset]).subscribe(result =>
      this.isSmallScreen = result.matches,
    )
  }

  trackTile(index: number, tile: Tile) {
    return tile.text;
  }

}

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

export interface Link{
  title: string;
  href: string;
  icon: string;
}