import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Customer } from '../../models/customer';
import { CustomerDetailsComponent } from '../customer-details/customer-details';

@Component({
  selector: 'app-customer-list',
  standalone: true,
  imports: [CommonModule, FormsModule, CustomerDetailsComponent],
  templateUrl: './customer-list.html',
  styleUrl: './customer-list.css',
})
export class CustomerListComponent {
  customers: Customer[] = [
    {
      id: 1,
      name: 'Deepak Kumar',
      address: 'Delhi, India',
      email: 'deepak.kumar@example.com',
      phone: '7557758670',
      dateOfBirth: new Date('2003-03-19'),
      gender: 'Male'
    },
    {
      id: 2,
      name: 'RajDeep',
      address: 'USA',
      email: 'rajdeep@example.com',
      phone: '555-5678',
      dateOfBirth: new Date('1985-05-05'),
      gender: 'Male'
    },
    {
      id: 3,
      name: 'Deepika Singh',
      address: 'Mumbai, India',
      email: 'deepika.singh@example.com',
      phone: '555-9012',
      dateOfBirth: new Date('1990-09-09'),
      gender: 'Female'
    },
    {
      id: 4,
      name: 'Raj',
      address: '101 Pine St, AnotherTown, USA',
      email: 'raj@example.com',
      phone: '555-3456',
      dateOfBirth: new Date('1988-08-08'),
      gender: 'Male'
    },
    {
      id: 5,
      name: 'Rohan',
      address: '202 Maple St, YetAnotherTown, USA',
      email: 'rohan@example.com',
      phone: '555-7890',
      dateOfBirth: new Date('1982-02-02'),
      gender: 'Male'
    },
    {
      id: 6,
      name: 'Kabir',
      address: 'USA',
      email: 'kabir@example.com',
      phone: '555-7891',
      dateOfBirth: new Date('1999-02-02'),
      gender: 'Male'
    },
    {
      id: 7,
      name: 'Raj Deepak',
      address: 'Patna, Bihar',
      email: 'raj@example.com',
      phone: '5647890',
      dateOfBirth: new Date('2001-02-02'),
      gender: 'Male'
    }

  ];
  searchText: string = '';

  currentPage: number = 1;
  itemsPerPage: number = 5;

  get filteredCustomers(){
    return this.customers.filter(c => c.name.toLowerCase().includes(this.searchText.toLowerCase()));
  }

  get paginatedCustomers(){
    const start = (this.currentPage-1)*this.itemsPerPage;
    return this.filteredCustomers.slice(start, start + this.itemsPerPage);
  }

  nextPage(){
    if(this.currentPage * this.itemsPerPage < this.filteredCustomers.length){
      this.currentPage++;
    }
  }

  prevPage(){
    if(this.currentPage > 1){
      this.currentPage--;
    }
  }
}
