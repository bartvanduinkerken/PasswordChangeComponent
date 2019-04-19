import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PasswordEditorModel, PasswordEditorOutputModel } from './password-editor.models';

@Component({
  selector: 'app-password-editor',
  templateUrl: './password-editor.component.html',
  styleUrls: ['./password-editor.component.css']
})
export class PasswordEditorComponent implements OnInit {
  @Input() model: PasswordEditorModel;
  @Output() post = new EventEmitter();
  @Output() cancel = new EventEmitter();
  outputModel : PasswordEditorOutputModel = new PasswordEditorOutputModel();
  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    this.post.emit(this.outputModel);
  }

  onCancel() {
    this.cancel.emit();
  }
}

