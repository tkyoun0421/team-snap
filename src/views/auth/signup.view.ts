import { View } from '@/views';

export default class SignUpView extends View {
  private emailInputEl!: HTMLInputElement;
  private passwordInputEl!: HTMLInputElement;
  private submitBtnEl!: HTMLButtonElement;

  constructor(containerId: string) {
    super(containerId);

    this.mount();
  }

  mount() {
    const wrapper = document.createElement('div');

    this.emailInputEl = document.createElement('input');
    this.passwordInputEl = document.createElement('input');
    this.submitBtnEl = document.createElement('button');

    this.emailInputEl.type = 'email';
    this.emailInputEl.placeholder = '이메일을 입력하세요';

    this.passwordInputEl.type = 'password';
    this.passwordInputEl.placeholder = '비밀번호를 입력하세요';

    this.submitBtnEl.textContent = '회원가입';

    wrapper.append(this.emailInputEl, this.passwordInputEl, this.submitBtnEl);

    this.container.appendChild(wrapper);
  }

  render() {
    console.log('signup-view render!');
  }

  attachEventHandler(handler: () => void): void {
    console.log('attachEventHandler 호출됨');
    this.submitBtnEl.addEventListener('click', handler);
  }

  getValue(): { email: string; password: string } {
    return {
      email: this.emailInputEl.value,
      password: this.passwordInputEl.value,
    };
  }
}
