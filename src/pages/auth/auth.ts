import { InputField } from '@/views/auth';
import { Fields } from '@/types/common';
import template from './auth.template';

interface Props {
  title: string;
  type: 'signin' | 'signup';
}

const defaultProps = {
  title: '회원가입',
  type: 'signup',
};

export default class Auth {
  private fields: Fields = [];
  private template = template;
  private container: HTMLDivElement;
  private data: Props;

  constructor(container: string, data: Props) {
    this.container = document.querySelector(container) as HTMLDivElement;
    this.data = { ...defaultProps, ...data };

    this.render();
    this.init();
  }

  private init() {
    const emailField = new InputField('#required-fields', {
      id: 'email',
      type: 'email',
      label: '이메일',
      placeholder: '이메일을 입력해주세요.',
      require: false,
    });
    const passwordField = new InputField('#required-fields', {
      id: 'password',
      type: 'password',
      label: '비밀번호',
      placeholder: '비밀번호를 입력해주세요.',
      require: false,
    });

    this.fields.push(emailField);
    this.fields.push(passwordField);
  }

  private validate() {
    const isAllValid = this.fields.every((field) => field.valid);
    console.log('fields : ', this.fields);
    return isAllValid;
  }

  submitSignUpForm() {
    const form = document.getElementById('auth-form') as HTMLFormElement;
    form.addEventListener('submit', (e) => {
      e.preventDefault();
    });
  }

  render() {
    const divEl = document.createElement('div');
    divEl.innerHTML = this.template(this.data);
    this.container.appendChild(divEl);

    this.submitSignUpForm();

    this.fields.forEach((field) => {
      field.render(true);
    });
  }
}
