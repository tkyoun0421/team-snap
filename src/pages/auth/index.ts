import { TextField } from '@/views/auth';

export default class Auth {
  container: HTMLDivElement;

  constructor(containerId: string) {
    this.container = document.querySelector(containerId) as HTMLDivElement;
  }

  public render() {
    const textField = new TextField('#app');
    console.log(textField);
  }
}
