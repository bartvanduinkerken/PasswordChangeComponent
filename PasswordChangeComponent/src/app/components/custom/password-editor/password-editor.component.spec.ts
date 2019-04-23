import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { PasswordEditorComponent } from './password-editor.component';
import { PasswordEditorModel } from './password-editor.models';
import { By } from '@angular/platform-browser';

describe('PasswordEditorComponent', () => {
  let component: PasswordEditorComponent;
  let fixture: ComponentFixture<PasswordEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule ],
      declarations: [ PasswordEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PasswordEditorComponent);
    component = fixture.componentInstance;
    component.model = new PasswordEditorModel();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain current password input', () => {
    const field2Model = fixture.debugElement.query(By.css('input[name=currentPassword]')).references['currentPassword'];
    expect(field2Model).toBeTruthy();
  });

  it('should contain new password input', () => {
    const field2Model = fixture.debugElement.query(By.css('input[name=newPassword]')).references['newPassword'];
    expect(field2Model).toBeTruthy();
  });

  it('should contain new confirm password input', () => {
    const field2Model = fixture.debugElement.query(By.css('input[name=newPasswordConfirm]')).references['newPasswordConfirm'];
    expect(field2Model).toBeTruthy();
  });
});
