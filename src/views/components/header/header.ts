import template from './header.template';

export default class Header {
  private template = template;
  private container: HTMLDivElement;

  constructor(containerId: string) {
    this.container = document.querySelector(containerId) as HTMLDivElement;

    this.render();
  }

  private render(append: boolean = false) {
    if (append) {
      const divEl = document.createElement('div');
      divEl.innerHTML = this.template(template);
      this.container.appendChild(divEl);
    } else {
      console.log('예외 처리');
    }
  }
}
