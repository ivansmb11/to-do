import { UserLogged } from './user';

export interface AuthState {
  status: string;
  user:   UserLogged;
  token:  string;
}
