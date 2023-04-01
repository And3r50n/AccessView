import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileMapComponent } from './profile-map.component';

const routes: Routes = [
  { path: '', component: ProfileMapComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileMapRoutingModule { }
