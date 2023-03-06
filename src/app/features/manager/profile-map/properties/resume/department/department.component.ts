import { Component } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { ResumeService } from '../resume.service';
import { Observable, of } from 'rxjs';
import { Department } from 'src/app/core/entities/Department';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state( 'expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('250ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class DepartmentComponent {

  public departments = new Observable<Department[]>;
  public displayedColumns = ['more', 'name', 'expand'];
  public collapsed: Department[] | null | undefined;

  constructor(private service: ResumeService) {
    this.service.getDepartments().subscribe(department => {
      this.departments = of(department)
    });
  }

}
