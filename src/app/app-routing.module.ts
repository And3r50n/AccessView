import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';

const routes: Routes = [
  { 
    path:'',
    pathMatch: 'full', redirectTo:'login' 
  },
  { 
    path: 'login', 
    loadChildren: () => import('./core/core.module').then(m => m.CoreModule) 
  },
  { 
    path:'home', 
    loadChildren: () => import('./features/domain.module').then(m => m.DomainModule),
  },
  { 
    path: '**', 
    component:  PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
