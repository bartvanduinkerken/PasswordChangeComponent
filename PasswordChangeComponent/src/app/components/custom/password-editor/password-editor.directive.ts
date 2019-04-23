import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appPasswordEditor]'
})
export class PasswordEditorDirective {
  private _shown = false;

  constructor(private el: ElementRef) {
    this.setup();
  }

  toggle(span: HTMLElement) {
    this._shown = !this._shown;
    if (this._shown) {
      this.el.nativeElement.setAttribute('type', 'text');
      span.innerHTML = '<i class="fa fa-eye-slash"></i>';
    } else {
      this.el.nativeElement.setAttribute('type', 'password');
      span.innerHTML = '<i class="fa fa-eye"></i>';
    }
  }

  setup() {
    const parent = this.el.nativeElement.parentNode;
    const span = document.createElement('span');
    span.className = 'toggle-password';
    span.innerHTML = '<i class="fa fa-eye"></i>';
    span.addEventListener('click', (event) => {
      this.toggle(span);
    });
    parent.appendChild(span);
  }
}
