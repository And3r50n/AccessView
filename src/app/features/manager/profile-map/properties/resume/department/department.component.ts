import { Component } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { ResumeService } from '../resume.service';
import { Observable, of } from 'rxjs';
import { Section } from 'src/app/core/entities/Section';

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

  public sections = new Observable<Section[]>;
  public displayedColumns = ['more', 'name', 'expand'];
  public hidden: Section[] | null | undefined;

  constructor(private service: ResumeService) {
    this.service.getSections().subscribe(section => {
      this.sections = of(section)
    });
  }

}
