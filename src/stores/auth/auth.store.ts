import { AuthAction } from '@/actions/auth/auth.actions';
import AuthDispatcher from '@/dispatcher/auth/auth.dispatcher';
import { AuthActionType } from '@/types/action-types';
import { User } from '@supabase/supabase-js';

type Listener = () => void;

export interface State {
  isLoading: boolean;
  user: User | null;
}

export default class AuthStore {
  private state: State = { isLoading: false, user: null };
  private listeners: Listener[] = [];

  constructor(dispatcher: AuthDispatcher) {
    dispatcher.register(this.handleActions.bind(this));
  }

  private handleActions(action: AuthAction) {
    switch (action.type) {
      case AuthActionType.SIGN_UP_REQUEST:
        this.state.isLoading = true;
        console.log('SIGN_UP_REQUEST 상태 변경');
        this.emitChange();
        break;

      case AuthActionType.SIGN_UP_SUCCESS:
        this.state.isLoading = false;
        console.log('SIGN_UP_SUCCESS 상태 변경');
        this.emitChange();
        break;

      case AuthActionType.SIGN_UP_FAILURE:
        this.state.isLoading = false;
        this.state.user = null; // 실패시 사용자 정보 초기화
        this.emitChange();
        console.log('SIGN_UP_FAILURE 상태 변경');
        break;
    }
  }

  public getState() {
    return this.state;
  }

  public subscribe(listener: Listener) {
    this.listeners.push(listener);
    console.log('구독자 등록됨');
  }

  private emitChange() {
    console.log('emitChange 호출됨');
    this.listeners.forEach((listener) => listener());
  }
}
