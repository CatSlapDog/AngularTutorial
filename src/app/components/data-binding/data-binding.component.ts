import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-data-binding',
  imports: [FormsModule],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {
  firstName: string = "John";
  lastName: string = "Doe";
  age: number = 25;
  rollNo: number = 121;
  isActive: boolean = true;
  currentDate: Date = new Date();
  myPlaceholder: string = "Enter full name";
  divClassName: string = "bg-primary";
  selectedCity: string = "";


  constructor(private router: Router) { 
    // private router: Router means create instance of router service for injecting it into component
    console.log(this.firstName);

    this.isActive = false;
    console.log(this.isActive);
    //this.showWelcomeMessage()
}

navigateToAdmin(){
  this.router.navigateByUrl("/admin")
}
// use routerLink to navigate to another component by syntax in ts

showWelcomeMessage() {
  alert("Welcome to Angular Tutorial");
}

onCityChange() {
  console.log("City changed");
}

}