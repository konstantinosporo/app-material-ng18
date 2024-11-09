import { Component } from '@angular/core';
import { TestComponent } from "../components/test/test.component";

@Component({
  selector: 'app-customers',
  standalone: true,
  imports: [TestComponent],
  templateUrl: './customers.component.html',
  styleUrl: './customers.component.scss'
})
export class CustomersComponent {

}
