import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  imports: [],
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


  constructor() {
    console.log(this.firstName);

    this.isActive = false;
    console.log(this.isActive);
}
}