import { signupRequest } from '@/actions/auth/auth.actions';
import AuthDispatcher from '@/dispatcher/auth/auth.dispatcher';
import { Container } from '@/views';
import SignUpView from '@/views/auth/signup.view';

export default class SignUpContainer extends Container<SignUpView> {
  private dispatcher: AuthDispatcher;

  constructor(view: SignUpView) {
    super(view);
    this.dispatcher = new AuthDispatcher();
  }

  protected attachEvents(): void {
    this.view.attachEventHandler(() => this.handleSubmit());
  }

  private handleSubmit(): void {
    const { email, password } = this.view.getValue();
    console.log('회원가입 제출:', email, password);

    // 실제로 회원가입 요청을 보내는 코드
    this.dispatcher.dispatch(signupRequest(email, password));

    // 회원가입이 완료되면 상태를 확인하고 렌더링할 수 있도록 해야함
    // 예를 들어, 가입 성공 메시지나 에러 처리 등을 진행
  }
}
