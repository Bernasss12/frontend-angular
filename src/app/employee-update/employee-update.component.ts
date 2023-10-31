import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-employee-update',
  templateUrl: './employee-update.component.html',
  styleUrls: ['./employee-update.component.css']
})
export class EmployeeUpdateComponent implements OnInit{

  id!: number;
  employee!: Employee

  constructor(
    private employeeService: EmployeeService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  saveEmployee(employee: Employee) {
    this.employeeService.createEmployee(employee).subscribe( _ =>{
        this.goToEmploylist()
      }
    );
  }

  goToEmploylist() {
    this.router.navigate(['/employees']);
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id']
    this.employeeService.getEmployeeById(this.id).subscribe(
      data => this.employee = data
    )
  }

  onSubmit() {
    this.saveEmployee(this.employee)
  }
}
