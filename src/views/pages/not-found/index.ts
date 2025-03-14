export default class NotFound {
  container: HTMLDivElement;
  constructor(containerId: string) {
    this.container = document.querySelector(containerId) as HTMLDivElement;
  }

  render() {
    const pEl = document.createElement('p');
    pEl.innerHTML = 'not found';
    this.container.append(pEl);
  }
}
