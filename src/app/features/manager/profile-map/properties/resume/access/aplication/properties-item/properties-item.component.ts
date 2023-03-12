
import { Component, Inject, OnInit } from '@angular/core';
import { UntypedFormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ItemProperties } from 'src/app/core/entities/access/Item';
import { Role } from 'src/app/core/entities/access/Role';
import { PropertiesItemService } from './properties-item.service';

@Component({
  selector: 'app-properties-item',
  templateUrl: './properties-item.component.html',
  styleUrls: ['./properties-item.component.scss']
})

export class PropertiesItemComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) private id: number, private formBuilder: UntypedFormBuilder, private service: PropertiesItemService ){

  }

  ngOnInit(): void {
    this.service.getRoles(this.id).subscribe((item: ItemProperties) => this.item = item);
  }

  viewRole(role: Role):void{
    console.log(role);
  }

  firstFormGroup = this.formBuilder.group({
    firstCtrl: ['', Validators.required],
  });

  secondFormGroup = this.formBuilder.group({
    secondCtrl: ['', Validators.required],
  });


  public item: ItemProperties = {
    id: 0,
    name: '',
    application: '',
    created: new Date(),
    updated: new Date(),
    status: 0,
    roles: []
  };


}
