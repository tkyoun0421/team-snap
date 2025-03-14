import AuthDispatcher from '@/dispatcher/auth/auth.dispatcher';

type Listener = () => void;

export default class AuthStore {
  private isLoading: boolean = false;
  private error: string | null = null;
  private listners: Listener[] = [];

  constructor() {}
}
