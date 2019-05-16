import { AppRoutingModule } from './../app-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { HeaderComponent } from './header/header.component';
import { CasesComponent } from './cases/cases.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    MenuComponent,
    HeaderComponent,
    CasesComponent,
    ContactFormComponent
  ],
  imports: [CommonModule, AppRoutingModule, ReactiveFormsModule],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    MenuComponent,
    HeaderComponent,
    CasesComponent,
    ContactFormComponent
  ]
})
export class SharedModule {}
