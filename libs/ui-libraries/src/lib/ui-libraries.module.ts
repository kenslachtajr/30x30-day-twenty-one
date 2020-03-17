import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '@dogs-ngrx/material';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { LoginComponent } from './login/login.component';
import { WildcardComponent } from './wildcard/wildcard.component';
import { SignupComponent } from './signup/signup.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    LoginComponent,
    SignupComponent,
    ToolbarComponent,
    WildcardComponent
  ],
  exports: [
    ToolbarComponent,
    LoginComponent,
    WildcardComponent,
    SignupComponent
  ]
})
export class UiLibrariesModule {}
