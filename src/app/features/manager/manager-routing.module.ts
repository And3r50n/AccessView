import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManagerComponent } from './manager.component';

const routes: Routes = [
  {
    path: '', component: ManagerComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./overview/overview.module').then(m => m.OverviewModule)
      },
      {
        path: 'overview',
        loadChildren: () => import('./overview/overview.module').then(m => m.OverviewModule)
      },
      {
        path: 'profiles',
        loadChildren: () => import('./profile-map/profile-map.module').then(m => m.ProfileMapModule)
      },
      {
        path: 'approvals',
        loadChildren: () => import('./approvals/approvals.module').then(m => m.ApprovalsModule)
      },
      {
        path: 'team',
        loadChildren: () => import('./team-management/team-management.module').then(m => m.TeamManagementModule)
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManagerRoutingModule { }
