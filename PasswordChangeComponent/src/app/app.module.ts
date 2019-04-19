import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PasswordEditorComponent } from './components/custom/password-editor/password-editor.component';
import { PasswordEditorDirective } from './components/custom/password-editor.directive';

@NgModule({
  declarations: [
    AppComponent,
    PasswordEditorComponent,
    PasswordEditorDirective
  ],
  imports: [
    BrowserModule, 
    FormsModule,
    ReactiveFormsModule    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
