import { PasswordValidationDirective } from './password-validation.directive';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { async, ComponentFixture, ComponentFixtureAutoDetect, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';



@Component({
  template: '<form #form1="ngForm">' +
    '<input name="password" #passwordModel="ngModel" [(ngModel)]="password" appPasswordValidation>' +
    '</form>'
})
class TestComponent {
  password: string;
}


describe('PasswordValidationDirective', () => {
  it('should create an instance', () => {
    const directive = new PasswordValidationDirective();
    expect(directive).toBeTruthy();
  });

  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CommonModule, FormsModule],
      declarations: [PasswordValidationDirective, TestComponent],
      providers: [
        { provide: ComponentFixtureAutoDetect, useValue: true },
      ]
    }).compileComponents();
  }));
  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
  });

  it('should invalidate password requirement to short', () => {
    component.password = '1892Aa!';
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      fixture.detectChanges();
      let errors = {};
      const field2Model = fixture.debugElement.query(By.css('input[name=password]')).references['passwordModel'];
      errors = field2Model.errors || {};
      expect(errors['passwordRequirementsNotMet']).toBe(true);
    });

  });

  it('should invalidate password requirement no value', () => {
    component.password = '';
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      fixture.detectChanges();
      let errors = {};
      const field2Model = fixture.debugElement.query(By.css('input[name=password]')).references['passwordModel'];
      errors = field2Model.errors || {};
      expect(errors['passwordRequirementsNotMet']).toBe(true);
    });

  });

  it('should invalidate password requirement only numbers', () => {
    component.password = '12345678901234';
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      fixture.detectChanges();
      let errors = {};
      const field2Model = fixture.debugElement.query(By.css('input[name=password]')).references['passwordModel'];
      errors = field2Model.errors || {};
      expect(errors['passwordRequirementsNotMet']).toBe(true);
    });

  });

  it('should invalidate password requirement only number and small letters', () => {
    component.password = '123456789q';
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      fixture.detectChanges();
      let errors = {};
      const field2Model = fixture.debugElement.query(By.css('input[name=password]')).references['passwordModel'];
      errors = field2Model.errors || {};
      expect(errors['passwordRequirementsNotMet']).toBe(true);
    });

  });

  it('should validate password requirement 3 out of 4 ', () => {
    component.password = '123456789q!';
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      fixture.detectChanges();
      let errors = {};
      const field2Model = fixture.debugElement.query(By.css('input[name=password]')).references['passwordModel'];
      errors = field2Model.errors || {};
      expect(errors['passwordRequirementsMet']).toBe(true);
    });

  });

  it('should validate password requirement 4 out of 4', () => {
    component.password = 'QWert345!';
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      fixture.detectChanges();
      let errors = {};
      const field2Model = fixture.debugElement.query(By.css('input[name=password]')).references['passwordModel'];
      errors = field2Model.errors || {};
      expect(errors['passwordRequirementsMet']).toBe(true);
    });

  });
});

