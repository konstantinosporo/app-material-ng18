import { NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-title',
  standalone: true,
  imports: [MatCardModule, NgIf],
  templateUrl: './title.component.html',
  styleUrl: './title.component.scss'
})
export class TitleComponent {
  @Input() title: string = '';
  @Input() content?: string = '';
  @Input() subtitle?: string = '';

}
