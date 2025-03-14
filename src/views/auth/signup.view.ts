import InputField from '@/components/input-field';

type AnyObject = {
  [key: string]: any;
};

export default class SignUpView {
  private container: string;
  private data: AnyObject;
  private fields: AnyObject[];

  constructor(container: string, data: AnyObject = {}) {
    this.container = container;
    this.data = data;
    this.fields = [];

    this.initialize();
  }

  private initialize() {
    const emailField = new InputField('#app');

    this.fields.push(emailField);
  }

  public render() {
    this.fields.forEach((field) => {
      field.render();
    });
  }
}
