import { Component, Inject } from '@angular/core';
import { UntypedFormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Access } from 'src/app/core/entities/access/Access';
import { ActionsService } from './actions.service';



@Component({
  selector: 'app-actions',
  templateUrl: './actions.component.html',
  styleUrls: ['./actions.component.scss']
})


export class ActionsComponent{


  public accesses: Access[] = [];


  constructor(@Inject(MAT_DIALOG_DATA) private data: Access[], private formBuilder: UntypedFormBuilder, private service: ActionsService) {
    //this. accesses = this.service.filterStructuresWithRolesStatus0(data);
  }


  firstFormGroup = this.formBuilder.group({
    firstCtrl: ['', Validators.required],
  });

  secondFormGroup = this.formBuilder.group({
    secondCtrl: ['', Validators.required],
  });

  

}
