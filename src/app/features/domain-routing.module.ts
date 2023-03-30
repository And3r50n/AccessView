import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TemplateComponent } from '../core/template/template.component';


const routes: Routes = [
  {
    path: '',
    component: TemplateComponent, 
    children: [
      {
        path: '',
        loadChildren: () => import('./manager/manager.module').then(m => m.ManagerModule) 
      },
      {
        path: 'manager',
        loadChildren: () => import('./manager/manager.module').then(m => m.ManagerModule) 
      },
      {
        path: 'admin',
        loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) 
      },
      {
        path: 'account',
        loadChildren: () => import('./my-account/my-account.module').then(m => m.MyAccountModule) 
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DomainRoutingModule { }
