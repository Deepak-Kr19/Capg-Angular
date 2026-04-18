import { bootstrapApplication } from '@angular/platform-browser';
import { CustomerListComponent } from './app/components/customer-list/customer-list';


bootstrapApplication(CustomerListComponent)
  .then(() => console.log('Application bootstrapped successfully!'))
  .catch(err => console.error('Error bootstrapping application:', err));  
