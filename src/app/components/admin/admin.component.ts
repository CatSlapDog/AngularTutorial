import { Component } from '@angular/core';
import { RouteConfigLoadEnd, RouterLink, RouterOutlet } from '@angular/router';
import { UserComponent } from '../user/user.component';


@Component({
  selector: 'app-admin',
  imports: [AdminComponent,UserComponent,RouterLink],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {

}
