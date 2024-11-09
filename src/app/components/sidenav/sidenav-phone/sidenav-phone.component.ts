import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatIcon } from '@angular/material/icon';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Link } from '../../test/test.component';

@Component({
  selector: 'app-sidenav-phone',
  standalone: true,
  imports: [MatCardModule, MatIcon, RouterLink, RouterLinkActive, MatButtonModule, MatDividerModule],
  templateUrl: './sidenav-phone.component.html',
  styleUrl: './sidenav-phone.component.scss'
})
export class SidenavPhoneComponent {
  @Input() links: Link[] = [];
}
