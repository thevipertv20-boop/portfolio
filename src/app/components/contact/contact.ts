import { Component, ElementRef, inject, signal, viewChild } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { LanguageService } from '../../i18n/language.service';

type TextField = 'name' | 'email' | 'message';
type FieldError = 'required' | 'minLength' | 'invalid' | null;
type SendStatus = 'idle' | 'sending' | 'success' | 'error';

const NOT_BLANK = /\S/;
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule, RouterLink],
  styleUrl: './contact.scss',
  templateUrl: './contact.html',
})
export class Contact {
  protected readonly t = inject(LanguageService).t;

  protected readonly privacyPolicyRoute = '/privacy-policy';

  protected readonly form = new FormGroup({
    name: new FormControl('', { nonNullable: true, validators: [Validators.required, Validators.pattern(NOT_BLANK)] }),
    email: new FormControl('', { nonNullable: true, validators: [Validators.required, Validators.pattern(EMAIL)] }),
    message: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.pattern(NOT_BLANK), Validators.minLength(3)],
    }),
    privacy: new FormControl(false, { nonNullable: true, validators: [Validators.requiredTrue] }),
  });

  protected readonly privacyError = signal(false);
  protected readonly status = signal<SendStatus>('idle');

  private readonly nameInput = viewChild.required<ElementRef<HTMLInputElement>>('nameInput');

  protected focusName(event: Event): void {
    event.preventDefault();
    this.nameInput().nativeElement.focus();
  }

  protected fieldError(field: TextField): FieldError {
    const control = this.form.controls[field];
    if (!control.touched || control.valid) {
      return null;
    }
    if (control.hasError('required') || !NOT_BLANK.test(control.value)) {
      return 'required';
    }
    if (control.hasError('minlength')) {
      return 'minLength';
    }
    return 'invalid';
  }

  protected validatePrivacy(): void {
    this.privacyError.set(this.form.controls.privacy.invalid);
  }

  protected resetStatus(): void {
    if (this.status() !== 'sending') {
      this.status.set('idle');
    }
  }

  protected async submit(): Promise<void> {
    if (this.form.invalid || this.status() === 'sending') {
      return;
    }
    this.status.set('sending');
    try {
      await this.send();
      this.form.reset();
      this.privacyError.set(false);
      this.status.set('success');
    } catch {
      this.status.set('error');
    }
  }

  // Sending gets connected in a separate step once the server setup is decided.
  private send(): Promise<void> {
    return Promise.reject(new Error('Contact form sending is not implemented yet.'));
  }
}
