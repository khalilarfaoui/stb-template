import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutRoutingModule } from './layout-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from '../auth/login/login.component';





@NgModule({
  declarations: [
    NavbarComponent,
    HomeComponent,
    LoginComponent
  ],
  imports: [
    LayoutRoutingModule,
    


  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class LayoutModule {}
