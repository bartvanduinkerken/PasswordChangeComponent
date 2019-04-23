export class PasswordEditorModel {
  constructor() {
    this.labelCurrentPassword = 'Current password';
    this.labelNewPassword = 'New password';
    this.labelNewPasswordConfirm = 'New password confirm';
  }
  labelCurrentPassword: string;
  labelNewPassword: string;
  labelNewPasswordConfirm: string;
}

export class PasswordEditorOutputModel {
  currentPassword: string;
  newPassword: string;
  newPasswordConfirm: string;
}
