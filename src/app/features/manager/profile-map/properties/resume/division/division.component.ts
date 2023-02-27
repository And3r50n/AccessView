import { Component, OnInit } from '@angular/core';
import { Department } from 'src/app/core/entities/Department';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { ResumeService } from '../resume.service';
import { Observable, of } from 'rxjs';




@Component({
  selector: 'app-division',
  templateUrl: './division.component.html',
  styleUrls: ['./division.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state( 'expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('250ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})



export class DivisionComponent implements OnInit {


  public departments = new Observable<Department[]>;
  public displayedColumns = ['more', 'name', 'expand'];
  public sections: Department[] | null | undefined;

  constructor(private service: ResumeService) {
    this.service.getDepartments().subscribe(department => {
      this.departments = of(department)
    });
  }

  ngOnInit(): void {
    
  }

}
