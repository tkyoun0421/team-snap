import SignUp from '@/pages/auth/sign-up';

export default class Auth {
  container: HTMLDivElement;

  constructor(containerId: string) {
    this.container = document.querySelector(containerId) as HTMLDivElement;
  }

  public render() {
    const signUp = new SignUp('#app');
  }
}
