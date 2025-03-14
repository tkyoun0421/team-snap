import { AuthActionType } from '@/types/action-types';

interface User {
  email: string;
  password: string;
}

interface Action {
  type: AuthActionType;
  payload: User;
}

export default class AuthDispatcher {
  private callbacks: Array<(action: Action) => void> = [];

  register(callback: (action: Action) => void): void {
    this.callbacks.push(callback);
  }

  dispatch(action: Action): void {
    for (const callback of this.callbacks) {
      callback(action);
    }
  }
}
