import { InputType } from '@/types/common';
import template from './input-field.template';

interface Props {
  id: string;
  type: InputType;
  label: string;
  placeholder: string;
  require: boolean;
}

const defaultProps = {
  id: '',
  type: '',
  label: '',
  placeholder: '',
  require: false,
};

export default class InputField {
  private template = template;
  private container: string;
  private props: Props;
  private data: string = '';
  private updated: boolean = false;
  private valid: boolean = false;

  constructor(container: string, props: Props) {
    this.container = container;
    this.props = { ...defaultProps, ...props };

    this.attachEventHandler();
  }

  update() {}

  validate() {}

  onChange() {}

  private attachEventHandler() {
    document.querySelector(this.container)?.addEventListener('change', this.onChange);
  }

  render(append: boolean = false) {
    const container = document.querySelector(this.container) as HTMLDivElement;
    if (append) {
      const divEl = document.createElement('div');
      divEl.innerHTML = this.template(this.props);

      container.appendChild(divEl);
    } else {
      console.log('에러 핸들링');
    }
  }
}
