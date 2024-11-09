import { BookApi } from "../books/book";
import { CustomerApi } from "../customers/customer";
/**
 * @konstantinosporo
 * @description
 * The actual projects Endpoint Reservation Interface
 * Endpoint URL: "https://book-api-bx2r.onrender.com/reservations"
 */
export interface ReservationApi{
  _id: string;
  customer: CustomerApi;
  book: BookApi;
  returnBy: Date;
  status: Status;
  reservedOn: Date;
  __v: number;

}
export enum Status{
  ACTIVE = "active",
  INACTIVE = "inactive"
}

