import { Component, Input, OnInit } from '@angular/core';
import { Access } from 'src/app/core/entities/access/Access';
import { DoneService } from './done.service';

@Component({
  selector: 'app-done',
  templateUrl: './done.component.html',
  styleUrls: ['./done.component.scss','../actions.component.scss']
})
export class DoneComponent implements OnInit {

  @Input() accesses: Access[] = [];

  constructor(private service: DoneService) {
  }

  ngOnInit(): void {
  }

  public onSubmit(){
    //this.service.insert(this.accesses).subscribe(result => console.log(result));
  }

}
