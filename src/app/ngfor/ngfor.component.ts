import { Component } from '@angular/core';

@Component({
  selector: 'app-ngfor',
  templateUrl: './ngfor.component.html',
  styleUrls: ['./ngfor.component.css']
})
export class NgforComponent {

  users = ['Akmal', 'Rehman', 'Umer', 'Imran', 'Kamran']

  userDetails=[
    {
      name: 'Akmal', email:'Email@gmail.com', address:'Lahore'
    },
    {
      name: 'Rehman', email:'Email@gmail.com', address:'Lahore'
    },
    {
      name: 'Umer', email:'Email@gmail.com', address:'Lahore'
    },
    {
      name: 'Imran', email:'Email@gmail.com', address:'Lahore'
    },
    {
      name: 'Kamran', email:'Email@gmail.com', address:'Lahore'
    },
  ]

}
