import { Component, linkedSignal, signal } from '@angular/core';

@Component({
  selector: 'app-linked-signal',
  imports: [],
  templateUrl: './linked-signal.component.html',
  styleUrl: './linked-signal.component.css'
})
export class LinkedSignalComponent {
  firstName = signal("Pan")
  lastName = signal("Kom")

  fullName = linkedSignal({
    source: this.firstName,
    computation: (newOptions,previous)=> {
      debugger;
      const fullName = newOptions + " " + this.lastName()
      return fullName;
    }
  })


  changeName(){
    this.firstName.set("Kom");
  }
}
