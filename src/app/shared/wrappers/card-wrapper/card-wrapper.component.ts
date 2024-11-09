import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CardAction } from './card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-card-wrapper',
  standalone: true,
  imports: [MatCardModule, MatIconModule, MatButtonModule],
  templateUrl: './card-wrapper.component.html',
  styleUrl: './card-wrapper.component.scss'
})
export class CardWrapperComponent {
  @Input() cardTitle!: string;
  @Input() subtitle!: string;
  @Input() content!: string;
  @Input() img!: string;
  @Input() actions!: CardAction[];
  @Input() footer!: string;

  @Output() emitActionEvent: EventEmitter<void> = new EventEmitter<void>();

  emitAction(): void {
    this.emitActionEvent.emit();
  }
}

