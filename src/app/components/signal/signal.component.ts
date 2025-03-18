import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-signal',
  imports: [],
  templateUrl: './signal.component.html',
  styleUrl: './signal.component.css'
})
export class SignalComponent {
  firstName = signal("Pan");

  lastName = signal<string>("Kom");

  courseName: string = "Angular";

  rollNo = signal<number>(0);

  constructor(){
    const value = this.firstName();
    setTimeout(() =>{
      debugger;
      this.courseName = "React JS";
      this.firstName.set("Parn")
      debugger;
    }, 5000);
  }

  onIncrement(){
    this.rollNo.update(oldValue => oldValue + 1);
  }
}
