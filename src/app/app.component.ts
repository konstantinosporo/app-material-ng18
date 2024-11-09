import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./navbar/navbar.component";
import { ToggleThemeComponent } from "./components/toggle-theme/toggle-theme.component";
import { FormComponent } from "./components/forms/form/form.component";
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, ToggleThemeComponent, FormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  
})
export class AppComponent {
  title = 'app-material-ng18';
 
}
