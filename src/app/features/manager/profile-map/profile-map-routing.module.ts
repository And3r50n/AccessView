import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileMapComponent } from './profile-map.component';
import { PropertiesComponent } from './properties/properties.component';

const routes: Routes = [
  {
    path: '',
    component: ProfileMapComponent, 
  },
  {
    path: 'profile',
    component: PropertiesComponent, 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ProfileMapRoutingModule {

}
