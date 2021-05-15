import { Injectable } from '@angular/core';
import { FlightDestinationsService } from './flight-destinations.service';

const orders = [
  {
    name: "abab",
    idFlight: "111",
  },
  {
    name : "cdcd",
    idFlight: "222",
  },
  {
    name : "efef",
    idFlight: "222",
  }
]

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  private orders = orders;

  constructor(private flights: FlightDestinationsService) { }

  AddYourFlight(order: typeof orders[0]){
    orders.push(order);
  }
  getOrders(){
    return orders;
  }
}
