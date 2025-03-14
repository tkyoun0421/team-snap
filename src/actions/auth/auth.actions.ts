import { AuthActionType } from '@/types/action-types';

export const signupRequest = (email: string, password: string) => ({
  type: AuthActionType.SIGN_UP_REQUEST,
  payload: { email, password },
});

export const signupSuccess = () => ({
  type: AuthActionType.SIGN_UP_SUCCESS,
});

export const signupFailure = (error: string) => ({
  type: AuthActionType.SIGN_UP_FAILURE,
  payload: { error },
});

export type AuthAction =
  | ReturnType<typeof signupRequest>
  | ReturnType<typeof signupSuccess>
  | ReturnType<typeof signupFailure>;
