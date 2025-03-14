import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  imports: [NgFor],
  templateUrl: './ng-for.component.html',
  styleUrl: './ng-for.component.css'
})
export class NgForComponent {

  cityList: string[] = ['Nagasaki','Tokyo','Okinawa','Osaka','Hokkaido'];

  employeeArray: any[] = [
    {empId:111, name:'AAA', city:'Nagasaki' ,contactNo: '1111111111'},
    {empId:112, name:'BBB', city:'Tokyo' ,contactNo: '2222222222'},
    {empId:113, name:'CCC', city:'Okinawa' ,contactNo: '3333333333'},
    {empId:114, name:'DDD', city:'Osaka' ,contactNo: '4444444444'},
    {empId:115, name:'EEE', city:'Hokkaido' ,contactNo: '5555555555'},
  ]
}
