import { AsyncPipe, DatePipe, NgClass, NgStyle, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { Observable } from 'rxjs';
import { ReservationService } from '../services/reservations/reservation.service';
import { ReservationApi } from './reservation';
import {MatChipsModule} from '@angular/material/chips';


@Component({
  selector: 'app-reservations',
  standalone: true,
  imports: [AsyncPipe,UpperCasePipe,DatePipe,NgStyle, MatTableModule, MatButtonModule, MatChipsModule],
  templateUrl: './reservations.component.html',
  styleUrl: './reservations.component.scss'
})
export class ReservationsComponent {
  reservationStream$!: Observable<ReservationApi[]>;
  displayedColumns: string[] = ['_id', 'customer', 'book', 'returnBy', 'status', 'reservedOn','actions'];

  constructor(private readonly reservationHttpService: ReservationService) {
    this.reservationStream$ = this.reservationHttpService.getReservations();
  }
  
  handleClick(id: string, action: string) {
    console.log(id);
    // TODO ADD THE LOGIC FOR BUTTON CLICKS CAN USE SWITCH TO ALSO GET SWITCH FUNCTIONALITIES
    switch (action) {
      case 'view':
        console.log('I have clicked the view button');
        break;
      case 'edit':
        console.log('I have clicked the edit button');
        break;
      case 'delete':
        console.log('I have clicked the delete button');
        break;
      default: break;
    }
  }
}
