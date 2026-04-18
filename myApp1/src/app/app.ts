import { Component } from '@angular/core';
import { UserComponent } from './components/user/user'; // ✅ import

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [UserComponent],  // ✅ add here
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent { }