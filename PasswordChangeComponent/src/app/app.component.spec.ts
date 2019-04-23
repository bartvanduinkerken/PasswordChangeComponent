import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { PasswordEditorComponent } from './components/custom/password-editor/password-editor.component';
import { PasswordEditorDirective } from './components/custom/password-editor/password-editor.directive';
import { PasswordValidationDirective } from './components/custom/password-editor/password-validation.directive';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule ],
      declarations: [
        AppComponent,
        PasswordEditorComponent,
        PasswordEditorDirective,
        PasswordValidationDirective
      ],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Password change component app');
  }));
  it('should render title in a h2 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h2').textContent).toContain('Password Change Component');
  }));
});
