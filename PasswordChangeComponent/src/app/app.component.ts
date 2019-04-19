import { Component } from '@angular/core';
import { PasswordEditorOutputModel, PasswordEditorModel } from './components/custom/password-editor/password-editor.models';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Password change component app';
  editPassword = false;
  passwordModel: PasswordEditorModel;
  showPasswordForm() {
    this.editPassword = true;
    this.passwordModel = new PasswordEditorModel();
    this.passwordModel.labelCurrentPassword = 'Current password';
    this.passwordModel.labelNewPassword = 'New password';
    this.passwordModel.labelNewPasswordConfirm = 'New password confirm';
    console.log('show password component');
  }
  hidePasswordForm() {
    this.editPassword = false;
  }
  postPassword(model: PasswordEditorOutputModel) {
    this.editPassword = false;
    console.log(model);
  }

  cancelPassword(id: string) {
    this.editPassword = false;
  }

}
