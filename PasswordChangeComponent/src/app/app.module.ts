import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PasswordEditorComponent } from './components/custom/password-editor/password-editor.component';
import { PasswordEditorDirective } from './components/custom/password-editor/password-editor.directive';

import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { PasswordValidationDirective } from './components/custom/password-editor/password-validation.directive';

@NgModule({
  declarations: [
    AppComponent,
    PasswordEditorComponent,
    PasswordEditorDirective,
    PasswordValidationDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
