export default class Auth {
  container: HTMLDivElement;

  constructor(containerId: string) {
    this.container = document.querySelector(containerId) as HTMLDivElement;
  }

  public render() {
    const pEl = document.createElement('p');
    pEl.innerHTML = 'auth';
    this.container.append(pEl);
  }
}
