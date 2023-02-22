import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatToolbarModule } from '@angular/material/toolbar';

import { AuthenticationComponent } from './authentication/authentication.component';
import { CoreRoutingModule } from './core-routing.module';
import { TemplateComponent } from './template/template.component';
import { FooterComponent } from './template/footer/footer.component';
import { HeaderComponent } from './template/header/header.component';



@NgModule({
  declarations: [
    AuthenticationComponent,
    TemplateComponent,
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    FormsModule,
    MatInputModule,
    MatCardModule,
    MatDividerModule,
    MatProgressBarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatToolbarModule,
    MatMenuModule
  ],
  exports:[
  ]
})
export class CoreModule { 
  
}
