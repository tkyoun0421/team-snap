import template from './text-field.template';

interface Props {
  id: string;
  password: string;
  label: string;
  placeholder: string;
  type: 'email' | 'password';
  require: boolean;
}

const defaultProps = {
  id: '',
  password: '',
  label: '',
  type: 'email',
  placeholder: '',
  require: false,
};

export default class TextField {
  private template = template;
  private container: HTMLDivElement;
  private data: Props;

  constructor(containerId: string, data: Props) {
    this.container = document.querySelector(containerId) as HTMLDivElement;
    this.data = { ...defaultProps, ...data };

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
