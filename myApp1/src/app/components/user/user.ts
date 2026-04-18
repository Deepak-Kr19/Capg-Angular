import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user',
  standalone: true,   
  imports: [CommonModule],
  templateUrl: './user.html',
  styleUrls: ['./user.css']
})
export class UserComponent {

  users = [
    { name: 'Rahul Sharma', address: 'Delhi', age: 22, gender: 'Male' },
    { name: 'Priya Singh', address: 'Mumbai', age: 24, gender: 'Female' },
    { name: 'Amit Verma', address: 'Lucknow', age: 23, gender: 'Male' },
    { name: 'Neha Gupta', address: 'Jaipur', age: 21, gender: 'Female' },
    { name: 'Arjun Mehta', address: 'Pune', age: 25, gender: 'Male' }
  ];
  
}