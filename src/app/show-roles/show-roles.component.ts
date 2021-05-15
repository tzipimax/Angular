import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Worker } from '../show-workers/show-workers.component';

export interface Role {
  id: number;
  description: string;
}


@Component({
  selector: 'app-show-roles',
  templateUrl: './show-roles.component.html',
  styleUrls: ['./show-roles.component.css']
})


export class ShowRolesComponent implements OnInit {
  roles: Role[] = [];
  workers: Worker[] = [];
  average: number = 0;

  getRoles() {
    return this.httpService.get<Role[]>('/assets/roles.json');
  }
  getWorkers() {
    return this.httpService.get<Worker[]>('/assets/Workers.json');
  }

  getAverage(role: Role) {
    let count:number = 0;
    let allSalary:number =0;
    this.workers.forEach(w => {
      if (role.id == w.role) {
        allSalary+=w.salary;
        count++;
      }
    });
    if(count!=0){
      return allSalary/count;
    }
    return "There are no workers in this role"
  }
  constructor(private httpService: HttpClient) {
    this.getRoles().subscribe((roles) => this.roles = roles);
    this.getWorkers().subscribe((workers) => this.workers = workers);
  }

  ngOnInit(): void {
  }
}
