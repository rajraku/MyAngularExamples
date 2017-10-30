import { Component, OnInit } from '@angular/core';
import { Employees} from '../../employees-list';
import { Router } from '@angular/router';

@Component({
  selector: 'employees',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees = Employees;

  constructor(private router: Router) { }

  ngOnInit() {
  }

}
