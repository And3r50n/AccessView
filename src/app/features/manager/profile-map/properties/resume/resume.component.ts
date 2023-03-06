import { Component } from '@angular/core';
import { MatChipInputEvent } from '@angular/material/chips';
import {COMMA, ENTER} from '@angular/cdk/keycodes';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss', '../properties.component.scss'],
})


export class ResumeComponent{


  constructor() { 

  }

  addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  fruits = [{name: 'Maria do Amaral'}, {name: 'Selma Felix'}, {name: 'Emerson da Silva'}];


  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();
    // Add our fruit
    if (value) {
      this.fruits.push({name: value});
    }
    // Clear the input value
    event.chipInput!.clear();
  }
  

}






