import { TextField } from '@/views/auth';

class SignUp {
  constructor() {}

  private init() {
    const emailField = new TextField('#required-fields', {
      id: 'email',
      label: '이메일',
      type: 'email',
      placeholder: '이메일을 입력해주세요',
      require: true,
    });
  }
}
