import { fields } from '@/types/common';
import { EmailField } from '@/views/auth';
import PasswordField from '@/views/auth/password-field';
import template from './signup.template';

export default class SignUp {
  private fields: fields = [];
  private template = template;
  private container: HTMLDivElement;

  constructor(container: string) {
    this.container = document.querySelector(container) as HTMLDivElement;

    this.render();
    this.init();
  }

  private init() {
    const emailField = new EmailField('#required-fields', {
      require: true,
    });
    const passwordField = new PasswordField('#required-fields', {
      require: true,
    });

    this.fields.push(emailField);
    this.fields.push(passwordField);
  }

  render() {
    const divEl = document.createElement('div');
    divEl.innerHTML = this.template(template);
    this.container.appendChild(divEl);

    this.fields.forEach((field) => {
      field.render(true);
    });
  }
}
