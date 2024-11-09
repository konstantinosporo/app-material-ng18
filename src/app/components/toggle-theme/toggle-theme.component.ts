import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatRippleModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { GlobalThemeService } from '../../services/global-theme.service';

@Component({
  selector: 'app-toggle-theme',
  standalone: true,
  imports: [ MatRippleModule,MatIconModule, MatButtonModule],
  templateUrl: './toggle-theme.component.html',
  styleUrl: './toggle-theme.component.scss'
})
export class ToggleThemeComponent {

  theme: string = 'dark-theme';
  
  constructor(private readonly themeService: GlobalThemeService){}

  toggleTheme() {
    document.body.classList.toggle('dark-theme');
    this.themeService.updateTheme();
    if (this.theme === 'dark-theme') {
      this.theme = '';
    } else this.theme = 'dark-theme';
  }
}
