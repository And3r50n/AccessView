import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Access } from 'src/app/core/entities/access/Access';
import { Approvals } from 'src/app/core/entities/Approvals';
import { ApprovalsService } from './approvals.service';
import { ApproversComponent } from './approvers/approvers.component';

@Component({
  selector: 'app-approvals',
  templateUrl: './approvals.component.html',
  styleUrls: ['./approvals.component.scss','../actions.component.scss']
})
export class ApprovalsComponent implements OnInit{

  @Input() accesses: Access[] = [];
  public approvals: Approvals[] = [];
  public displayedColumns = ['id','item', 'status'];

  constructor(public dialog: MatDialog, private service: ApprovalsService) {

  }

  ngOnInit(): void {
    this.service.getApprovals(this.accesses).subscribe((data: Approvals[]) => {
      this.approvals = data
    });
  }

  public showViewApprovers(id: number) {  
    const dialog = this.dialog.open(ApproversComponent,{
      width: '600px'
    });
    dialog.componentInstance.getApprovers(id);
    dialog.afterClosed().subscribe(result => {
    });
  }

  
}
