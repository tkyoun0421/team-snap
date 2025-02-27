import template from './password-field.template';

interface Props {
  require: boolean;
}

const defaultProps = {
  require: false,
};

export default class PasswordField {
  private template = template;
  private container: HTMLDivElement;
  private data: Props;

  constructor(container: string, data: Props) {
    this.container = document.querySelector(container) as HTMLDivElement;
    this.data = { ...defaultProps, ...data };
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
