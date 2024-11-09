import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Link } from '../test/test.component';
import {MatDividerModule} from '@angular/material/divider';
@Component({
  selector: 'app-sidenav',
  standalone: true,

  imports: [MatSidenavModule, MatIcon, RouterLink, RouterLinkActive, MatButtonModule, MatDividerModule],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss'
})
export class SidenavComponent {
  @Input() links: Link[] = [];
}
