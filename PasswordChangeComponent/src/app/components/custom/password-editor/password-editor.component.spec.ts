import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { PasswordEditorComponent } from './password-editor.component';
import { PasswordEditorModel } from './password-editor.models';

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
});
