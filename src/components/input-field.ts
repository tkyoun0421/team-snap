import template from './input-field.template';

export default class InputField {
  private container: string;
  private template = template;

  constructor(container: string) {
    this.container = container;
  }

  render() {
    const container = document.querySelector(this.container) as HTMLDivElement;

    const divEl = document.createElement('div');
    divEl.innerHTML = this.template({ id: 'test', label: '이름', type: 'text' });

    container.appendChild(divEl);
  }
}
