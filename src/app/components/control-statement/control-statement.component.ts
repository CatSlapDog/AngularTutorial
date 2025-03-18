import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-control-statement',
  imports: [FormsModule],
  templateUrl: './control-statement.component.html',
  styleUrl: './control-statement.component.css'
})
export class ControlStatementComponent {

  div1Visible: boolean = false;
  isChecked: boolean = false;
  dayName: string = '';

  employeeArray: any[] = [
    {empId:111, name:'AAA', city:'Nagasaki' ,contactNo: '1111111111'},
    {empId:112, name:'BBB', city:'Tokyo' ,contactNo: '2222222222'},
    {empId:113, name:'CCC', city:'Okinawa' ,contactNo: '3333333333'},
    {empId:114, name:'DDD', city:'Osaka' ,contactNo: '4444444444'},
    {empId:115, name:'EEE', city:'Hokkaido' ,contactNo: '5555555555'},
  ]

  cityList: string [] = [
    "Nagasaki", "Tokyo", "Okinawa", "Osaka", "Hokkaido"
  ]

  hideShowDiv1(isShow: boolean) {
    this.div1Visible = isShow;
  }

}
