import template from './text-field.template';

export default class TextField {
  private template = template;
  private container: HTMLDivElement;

  constructor(containerId: string) {
    this.container = document.querySelector(containerId) as HTMLDivElement;
    this.render(true);
  }

  render(append: boolean = false) {
    if (append) {
      const divEl = document.createElement('div');
      divEl.innerHTML = this.template(template);
      this.container.appendChild(divEl);
    } else {
      console.log('에러 핸들링');
    }
  }
}
