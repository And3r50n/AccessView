import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManagerComponent } from './manager.component';

const routes: Routes = [
  {
    path: '', component: ManagerComponent,
    children: [
      {
        path: 'profiles',
        loadChildren: () => import('./profile-map/profile-map.module').then(m => m.ProfileMapModule) 
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManagerRoutingModule { }
