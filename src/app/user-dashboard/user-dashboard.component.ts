import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';
import { Router } from '@angular/router';

interface City {
  name: string;
  code: string;
}

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})

export class UserDashboardComponent implements OnInit {
  cities1: any;
  selectedCity1: City;
  username = '';
  val1;
  cval1;
  textVal;
  constructor(private myService: MyserviceService,
    private _router: Router) {
    this.myService.getUserName()
      .subscribe(
        data => this.username = data.toString(),
        error => this._router.navigate(['/main/login'])
      )
  }

  ngOnInit() {
    this.cities1 = [
      { label: 'Select City', value: null },
      { label: 'New York', value: { id: 1, name: 'New York', code: 'NY' } },
      { label: 'Rome', value: { id: 2, name: 'Rome', code: 'RM' } },
      { label: 'London', value: { id: 3, name: 'London', code: 'LDN' } },
      { label: 'Istanbul', value: { id: 4, name: 'Istanbul', code: 'IST' } },
      { label: 'Paris', value: { id: 5, name: 'Paris', code: 'PRS' } }
    ];
  }

  logout() {
    localStorage.removeItem('token');
    this._router.navigate(['/main/login']);
  }
  submit() {
    console.log('this.val1',this.username);
    const payload: any = {};
    payload.username = this.username;
    payload.one = this.val1;
    payload.two = this.textVal;
    payload.three = this.cval1;

    this.myService.answerStore(payload).subscribe();

    console.log('############', payload);
  }
}
