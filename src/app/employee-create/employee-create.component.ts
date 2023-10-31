import { Component } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-create',
  templateUrl: './employee-create.component.html',
  styleUrls: ['./employee-create.component.css']
})
export class EmployeeCreateComponent {

  employee: Employee = new Employee()

  constructor(
    private employeeService: EmployeeService,
    private router: Router
  ) {}

  saveEmployee(employee: Employee) {
    this.employeeService.createEmployee(employee).subscribe( data =>{
        this.goToEmploylist()
      }
    );
  }

  goToEmploylist() {
    this.router.navigate(['/employees']);
  }

  onSubmit() {
    this.saveEmployee(this.employee);
  }

}
