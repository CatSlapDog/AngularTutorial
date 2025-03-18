import { Component } from '@angular/core';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { UserComponent } from "./components/user/user.component";
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { NgIfComponent } from './components/ng-if/ng-if.component';
import { NgForComponent } from "./components/ng-for/ng-for.component";
import { NgClassComponent } from './components/ng-class/ng-class.component';
import { NgStyleComponent } from "./components/ng-style/ng-style.component";



@Component({
  selector: 'app-root',
  imports: [DataBindingComponent, NgIfComponent, NgForComponent, AdminComponent, UserComponent, NgClassComponent, NgStyleComponent, RouterModule, RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
}) // add imports here instead of use app.module.ts
export class AppComponent {
  title = 'angularTutorial';
}
