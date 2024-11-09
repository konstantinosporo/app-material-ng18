import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BooksComponent } from './books/books.component';
import { ReservationsComponent } from './reservations/reservations.component';
import { CustomersComponent } from './customers/customers.component';

export const routes: Routes = [

  { path: '', component: HomeComponent, title: 'Home | AppLibrary' },
  { path: 'library', component: BooksComponent, title: 'Library | AppLibrary' },
  { path: 'reservations', component: ReservationsComponent, title: 'Reservations | AppLibrary' },
  { path: 'customers', component: CustomersComponent, title: 'Customers | AppLibrary' },

];
