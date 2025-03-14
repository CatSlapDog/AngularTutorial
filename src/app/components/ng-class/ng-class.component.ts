import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ng-class',
  imports: [NgClass,FormsModule],
  templateUrl: './ng-class.component.html',
  styleUrl: './ng-class.component.css'
})
export class NgClassComponent {

  divBgColor: string = "bg-success"; //divBgColor is string 
  // and bg-success is the class name that we will use to change the background color of the div.
  //the success is green, the danger is red

  isChecked: boolean = false;

  div3ClassName: string = '';

  addDiv1Color(className: string) {
    this.divBgColor = className; //function that makes the div change color
    //when click this function will be called & the dynamic ngClass we put in Div 1
    //will change follow the variable of that button send
    //if variable =btn-success, the div will change to green
    //if variable =btn-danger, the div will change to red
  }
}
