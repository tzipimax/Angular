import { Injectable } from '@angular/core';
import{ CurrentUserService } from '../services/current-user.service';

const flights = [
  {
    id:"111",
    from:"Israel",
    to: "USA",
    hour: "8:00",
  },
  {
    id:"222",
    from:"Israel",
    to: "London",
    hour: "8:00",
  },
  {
    id:"333",
    from:"Israel",
    to: "Russia",
    hour: "8:00",
  },
]

@Injectable({
  providedIn: 'root'
})
export class FlightDestinationsService {

  private flights = flights;

  constructor(private currentUser : CurrentUserService) { }

  AddFlight(flight: typeof flights[0] ){
    if(this.currentUser.getCurrentUser().role === 'agent'){
      this.flights.push(flight);
    }
    
  }
  getFlights(){
    return flights;
  }
}
